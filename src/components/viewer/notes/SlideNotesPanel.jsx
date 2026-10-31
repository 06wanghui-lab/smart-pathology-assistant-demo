import { Box, Text, VStack } from "@chakra-ui/react";
import ExistingNotes from "./ExistingNotes";
import YourDraft from "./YourDraft";

export default function SlideNotesPanel({
  caseItem,
  slide,
  notes,
  draftText,
  savedDraft,
  onDraftChange,
  onSaveDraft,
  onSubmitNote,
}) {
  const abbreviatedSlideId = `${slide.slideId.slice(0, 8)}...${slide.slideId.slice(-4)}`;
  const slideName = `${slide.name} · ${abbreviatedSlideId}`;

  return (
    <VStack align="stretch" gap="4">
      <Box bg="blue.50" borderRadius="lg" p="4">
        <Text
          fontSize="xs"
          fontWeight="bold"
          color="blue.600"
          textTransform="uppercase"
        >
          Slide note
        </Text>

        <Text fontWeight="semibold" mt="1">
          {slideName}
        </Text>

        <Text fontSize="sm" color="gray.600">
          Applies only to this slide in {caseItem.name}.
        </Text>
      </Box>

      <ExistingNotes
        title="Slide notes"
        notes={notes}
        emptyText="No slide notes yet."
      />

      <YourDraft
        noteScope="slide"
        isAddendum={false}
        targetName={slide.name}
        draftText={draftText}
        savedDraft={savedDraft}
        onDraftChange={onDraftChange}
        onSaveDraft={onSaveDraft}
        onSubmitNote={onSubmitNote}
      />
    </VStack>
  );
}
