//UI
import { Badge, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { LuLock, LuCheck, LuChevronRight } from "react-icons/lu";
import { reviewStatusStyles } from "../../../constants/reviewStatusStyles";
// components
import ExistingNotes from "./ExistingNotes";
import YourDraft from "./YourDraft";

export default function CaseNotesPanel({
  onCompleteCaseReview,
  caseItem,
  notes,
  draftText,
  savedDraft,
  onDraftChange,
  onSaveDraft,
  onSubmitNote,
}) {
  const isReviewed = caseItem.reviewStatus === "reviewed";
  const statusStyle =
    reviewStatusStyles[caseItem.reviewStatus] ??
    reviewStatusStyles["not-reviewed"];

  const caseNotes = notes.filter((note) => note.type === "case-note");
  const canMarkReviewed = caseNotes.length > 0;

  const addenda = notes.filter((note) => note.type === "addendum");

  return (
    <VStack align="stretch" gap="4">
      <HStack justify="space-between" align="center">
        <Text fontWeight="semibold">Case review</Text>

        <Badge colorPalette={statusStyle.colorPalette}>
          {statusStyle.label}
        </Badge>
      </HStack>

      {!isReviewed && (
        <Box
          as="button"
          type="button"
          width="100%"
          disabled={!canMarkReviewed}
          borderWidth="1px"
          onClick={() => onCompleteCaseReview(caseItem.id)}
          borderColor={canMarkReviewed ? "green.200" : "gray.200"}
          borderRadius="lg"
          bg={canMarkReviewed ? "green.50" : "gray.50"}
          px="3"
          py="3"
          textAlign="left"
          cursor={canMarkReviewed ? "pointer" : "not-allowed"}
          opacity={canMarkReviewed ? "1" : "0.7"}
          transition="background-color 0.2s, border-color 0.2s"
          _hover={
            canMarkReviewed
              ? {
                  bg: "green.100",
                  borderColor: "green.300",
                }
              : undefined
          }
        >
          <HStack gap="3">
            <Flex
              width="10"
              height="10"
              flexShrink="0"
              align="center"
              justify="center"
              borderRadius="full"
              bg={canMarkReviewed ? "green.500" : "gray.200"}
              color={canMarkReviewed ? "white" : "gray.500"}
            >
              {canMarkReviewed ? (
                <LuCheck size={22} strokeWidth={3} />
              ) : (
                <LuLock size={19} />
              )}
            </Flex>

            <Box flex="1" minW="0">
              <Text fontSize="sm" fontWeight="semibold" color="gray.800">
                Mark case reviewed
              </Text>

              <Text fontSize="xs" color="gray.500">
                {canMarkReviewed
                  ? "Finalize review for this case"
                  : "Submit a case note first"}
              </Text>
            </Box>

            {canMarkReviewed && (
              <Box color="gray.500" flexShrink="0">
                <LuChevronRight size={20} />
              </Box>
            )}
          </HStack>
        </Box>
      )}

      {isReviewed ? (
        <>
          <ExistingNotes title={null} notes={caseNotes} />

          {addenda.length > 0 && (
            <ExistingNotes title="Addenda" notes={addenda} />
          )}
        </>
      ) : (
        <ExistingNotes
          title="Case notes"
          notes={caseNotes}
          emptyText="No case notes yet."
        />
      )}

      <YourDraft
        noteScope="case"
        isAddendum={isReviewed}
        targetName={caseItem.name}
        draftText={draftText}
        savedDraft={savedDraft}
        onDraftChange={onDraftChange}
        onSaveDraft={onSaveDraft}
        onSubmitNote={onSubmitNote}
      />
    </VStack>
  );
}
