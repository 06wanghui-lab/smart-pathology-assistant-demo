import { Badge, Box, HStack, Text, Textarea, VStack } from "@chakra-ui/react";

import AppButton from "../../ui/AppButton";

export default function YourDraft({
  noteScope,
  isAddendum,
  targetName,
  draftText,
  savedDraft,
  onSaveDraft,
  onDraftChange,
  onSubmitNote,
}) {
  const isSaved = savedDraft;
  const isSlideNote = noteScope === "slide";
  const helperText = isAddendum
    ? `Add supplementary findings for ${targetName}.`
    : isSlideNote
      ? `Add findings for ${targetName} only.`
      : `Add findings for ${targetName}.`;

  return (
    <Box pt="4" borderTopWidth="1px" borderColor="gray.200">
      <VStack align="stretch" gap="3">
        <Text fontWeight="semibold">{isAddendum ? "Addendum" : "Note"}</Text>

        <Text fontSize="sm" color="gray.500">
          {helperText}
        </Text>
        <Textarea
          value={draftText}
          onChange={(event) => {
            onDraftChange(event.target.value);
          }}
          placeholder={helperText}
          minH="160px"
          resize="vertical"
        />
        <HStack justify="space-between">
          <Badge colorPalette="yellow">Draft</Badge>
          <Text fontSize="sm" color="gray.500">
            {isSaved ? "Saved" : "Not saved"}
          </Text>
        </HStack>
        <HStack gap="3">
          <AppButton variant="secondary" flex="1" onClick={onSaveDraft}>
            Save draft
          </AppButton>

          <AppButton variant="primary" flex="1" onClick={onSubmitNote}>
            {isAddendum ? "Submit addendum" : "Submit note"}
          </AppButton>
        </HStack>
      </VStack>
    </Box>
  );
}
