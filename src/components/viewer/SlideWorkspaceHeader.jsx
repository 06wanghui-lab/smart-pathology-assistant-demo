import { Box, Heading, Text } from "@chakra-ui/react";

export default function SlideWorkspaceHeader({ caseItem, slide }) {

  return (
    <Box mb="4">
      <Box>
        <Heading textStyle="appPageTitle" color="app.text" mb="1">
          {caseItem.name} · {caseItem.patient.name}
        </Heading>

        <Text textStyle="appBody" color="app.muted">
          {slide.name} · {slide.blockId} · {slide.stain}
        </Text>

        <Text fontSize="sm" color="app.muted">
          {slide.specimenType} · {slide.site} · {slide.sectionLevel}
        </Text>
      </Box>

    </Box>
  );
}
