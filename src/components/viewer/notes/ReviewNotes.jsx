import { SegmentGroup, VStack } from "@chakra-ui/react";
import { useState } from "react";
import CaseNotesPanel from "./CaseNotesPanel";
import SlideNotesPanel from "./SlideNotesPanel";

export default function ReviewNotes({
  onCompleteCaseReview,
  selectedCase,
  selectedSlide,
  user,
  notes,
  setNotes,
}) {
  const [drafts, setDrafts] = useState({});
  const [noteScope, setNoteScope] = useState("slide");

  const caseId = selectedCase.id;
  const slideId = selectedSlide.id;
  const isCaseReviewed = selectedCase.reviewStatus === "reviewed";

  const draftKey =
    noteScope === "case" ? `case:${caseId}` : `slide:${caseId}:${slideId}`;

  const currentDraft = drafts[draftKey] ?? {
    text: "",
    saved: false,
  };

  const caseNotes = notes.filter(
    (note) => note.caseId === caseId && note.slideId === null,
  );

  const slideNotes = notes.filter(
    (note) => note.caseId === caseId && note.slideId === slideId,
  );

  const handleDraftChange = (text) => {
    setDrafts((currentDrafts) => ({
      ...currentDrafts,
      [draftKey]: {
        text,
        saved: false,
      },
    }));
  };

  const handleSaveDraft = () => {
    setDrafts((currentDrafts) => ({
      ...currentDrafts,
      [draftKey]: {
        ...currentDraft,
        saved: true,
      },
    }));
  };

  const handleSubmitNote = () => {
    const trimmedText = currentDraft.text.trim();

    if (!trimmedText) return;

    const noteType =
      noteScope === "slide"
        ? "slide-note"
        : isCaseReviewed
          ? "addendum"
          : "case-note";

    const submittedNote = {
      id: Date.now(),
      caseId,
      slideId: noteScope === "slide" ? slideId : null,
      type: noteType,
      reviewer: user.name || user.username,
      reviewedAt: new Date().toISOString(),
      text: trimmedText,
    };

    setNotes((currentNotes) => [...currentNotes, submittedNote]);

    setDrafts((currentDrafts) => ({
      ...currentDrafts,
      [draftKey]: {
        text: "",
        saved: false,
      },
    }));
  };

  return (
    <VStack align="stretch" gap="4">
      <SegmentGroup.Root
        value={noteScope}
        onValueChange={({ value }) => setNoteScope(value)}
        colorPalette="blue"
        width="100%"
      >
        <SegmentGroup.Indicator />

        <SegmentGroup.Items
          items={[
            { value: "case", label: "Case note" },
            { value: "slide", label: "Slide note" },
          ]}
          flex="1"
          justifyContent="center"
        />
      </SegmentGroup.Root>

      {noteScope === "case" ? (
        <CaseNotesPanel
          onCompleteCaseReview={onCompleteCaseReview}
          caseItem={selectedCase}
          notes={caseNotes}
          draftText={currentDraft.text}
          savedDraft={currentDraft.saved}
          onDraftChange={handleDraftChange}
          onSaveDraft={handleSaveDraft}
          onSubmitNote={handleSubmitNote}
        />
      ) : (
        <SlideNotesPanel
          caseItem={selectedCase}
          slide={selectedSlide}
          notes={slideNotes}
          draftText={currentDraft.text}
          savedDraft={currentDraft.saved}
          onDraftChange={handleDraftChange}
          onSaveDraft={handleSaveDraft}
          onSubmitNote={handleSubmitNote}
        />
      )}
    </VStack>
  );
}
