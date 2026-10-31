import { Box, Grid, HStack, IconButton, Text } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";

import { predictionStyles } from "../../../constants/predictionStyles";

export default function RegionDetails({
  showOverlay,
  selectedPrediction,
  onClearPrediction,
}) {
  const style = predictionStyles[selectedPrediction?.label];

  return (
    <Box>
      {!showOverlay ? (
        <Box borderWidth="1px" borderRadius="md" bg="gray.50" p="4">
          <Text fontSize="sm" fontWeight="semibold" mb="1">
            AI overlay is hidden
          </Text>

          <Text fontSize="sm" color="gray.500">
            Turn on the AI overlay to inspect classified tissue regions.
          </Text>
        </Box>
      ) : !selectedPrediction ? (
        <Box borderWidth="1px" borderRadius="md" bg="gray.50" p="4">
          <Text fontSize="sm" fontWeight="semibold" mb="1">
            Select a region
          </Text>

          <Text fontSize="sm" color="gray.500">
            Click a highlighted box on the slide to view its classification,
            confidence, and location.
          </Text>
        </Box>
      ) : (
        <Box borderWidth="1px" borderRadius="md" overflow="hidden">
          <HStack bg={style.chakraBg} px="4" py="3" justify="space-between">
            <HStack gap="3">
              <Box
                w="12px"
                h="12px"
                borderRadius="full"
                bg={style.chakraColor}
              />

              <Text fontWeight="semibold">{style.label}</Text>
            </HStack>

            <IconButton
              aria-label="Deselect selected region"
              title="Deselect region"
              size="xs"
              variant="outline"
              borderRadius="full"
              bg="white"
              color="gray.600"
              borderColor="gray.300"
              boxShadow="sm"
              onClick={onClearPrediction}
              _hover={{
                bg: "blue.50",
                color: "blue.600",
                borderColor: "blue.300",
              }}
              _active={{
                bg: "blue.100",
              }}
            >
              <LuX />
            </IconButton>
          </HStack>

          {/* prediction details */}
          <Grid templateColumns="1fr auto" gapY="2" px="4" py="3" fontSize="sm">
            <Text color="gray.500">Confidence</Text>
            <Text>{selectedPrediction.confidence.toFixed(2)}</Text>

            <Text color="gray.500">Coordinates</Text>
            <Text>
              ({selectedPrediction.x}, {selectedPrediction.y})
            </Text>

            <Text color="gray.500">Patch size</Text>
            <Text>
              {selectedPrediction.w} x {selectedPrediction.h}
            </Text>

            <Text color="gray.500">Region ID</Text>
            <Text>{selectedPrediction.id}</Text>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
