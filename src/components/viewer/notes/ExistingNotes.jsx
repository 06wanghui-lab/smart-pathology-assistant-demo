import { Box, HStack, Text, VStack } from "@chakra-ui/react";
export default function ExistingNotes({
  title = "Existing notes",
  notes,
  emptyText = "No notes yet.",
}) {
  return (
    <VStack align="stretch" gap="3">
      {title && <Text fontWeight="semibold">{title}</Text>}
      {notes.length === 0 && <Text color="gray.500">{emptyText}</Text>}

      {notes.map((note) => (
        <Box
          key={note.id}
          borderWidth="1px"
          borderRadius="lg"
          p="3"
          bg="gray.50"
        >
          <HStack justify="space-between" align="start" mb="2">
            <Text fontWeight="semibold">{note.reviewer}</Text>

            <Text fontSize="xs" color="gray.500" whiteSpace="nowrap">
              {new Date(note.reviewedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </HStack>

          <Text
            fontSize="sm"
            color="gray.700"
            lineHeight="1.6"
            whiteSpace="pre-wrap"
          >
            {note.text}
          </Text>
        </Box>
      ))}
    </VStack>
  );
}
