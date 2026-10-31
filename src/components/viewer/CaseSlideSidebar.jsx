import { Box, GridItem, Heading, Text, VStack } from "@chakra-ui/react";

export default function CaseSlideSidebar({
  caseItem,
  selectedSlideId,
  onSelectSlide,
}) {
  return (
    <GridItem
      area="cases"
      display={{ base: "none", lg: "block" }}
      layerStyle="appPanel"
      p="5"
    >
      <Heading textStyle="appSectionTitle" color="app.text" mb="2">
        {caseItem.name}
      </Heading>

      <Text color="app.muted" mb="4">
        Patient: {caseItem.patient.name}
      </Text>

      <VStack align="stretch" gap="3">
        {caseItem.slides.map((slide) => {
          const isSelected = selectedSlideId === slide.id;

          return (
            <Box
              key={slide.id}
              position="relative"
              borderWidth="1px"
              borderLeftWidth={isSelected ? "3px" : "1px"}
              borderRadius="appControl"
              p="3"
              cursor="pointer"
              borderColor={isSelected ? "blue.300" : "app.border"}
              borderLeftColor={isSelected ? "app.primary" : "app.border"}
              bg={isSelected ? "app.selected" : "app.surface"}
              transition="background-color 0.2s, border-color 0.2s"
              _hover={{
                bg: isSelected ? "app.selected" : "gray.50",
              }}
              onClick={() => onSelectSlide(slide)}
            >
              <Text fontWeight="600" color="app.text">
                {slide.name}
              </Text>

              <Text fontSize="sm" color="app.muted">
                {slide.blockId} · {slide.stain} · {slide.site}
              </Text>
            </Box>
          );
        })}
      </VStack>
    </GridItem>
  );
}
