import { Box, Heading, HStack, Text, VStack, Checkbox } from "@chakra-ui/react";

import { predictionStyles } from "../../../constants/predictionStyles";

export default function TissueClasses({
  classCounts,
  isReady,
  showOverlay,
  visibleClasses,
  onToggleClass,
}) {
  if (!isReady) {
    return (
      <Box borderWidth="1px" borderRadius="md" bg="gray.50" p="4">
        <Text fontSize="sm" fontWeight="semibold" mb="1">
          Tissue classes unavailable
        </Text>

        <Text fontSize="sm" color="gray.500">
          Run AI analysis to identify and count tissue classes.
        </Text>
      </Box>
    );
  }
  if (!showOverlay) {
    return (
      <Box borderWidth="1px" borderRadius="md" bg="gray.50" p="4">
        <Text fontSize="sm" fontWeight="semibold" mb="1">
          AI overlay is hidden
        </Text>

        <Text fontSize="sm" color="gray.500">
          Turn on the AI overlay to filter visible tissue classes.
        </Text>
      </Box>
    );
  }

  return (
    <Box borderWidth="1px" borderRadius="md" p="4">
      <Heading size="sm" mb="1">
        Tissue Classes
      </Heading>

      <Text fontSize="xs" color="gray.500" mb="3">
        Predicted patch count by tissue class.
      </Text>

      <VStack align="stretch" gap="2">
        {Object.entries(predictionStyles).map(([className, style]) => (
          <HStack key={className} justify="space-between">
            <Checkbox.Root
              size="sm"
              checked={visibleClasses.includes(className)}
              onCheckedChange={({ checked }) =>
                onToggleClass(className, checked === true)
              }
            >
              <Checkbox.HiddenInput />

              <Checkbox.Control
                borderColor={style.chakraColor}
                _checked={{
                  bg: style.chakraColor,
                  borderColor: style.chakraColor,
                }}
              >
                <Checkbox.Indicator color="white" />
              </Checkbox.Control>

              <Checkbox.Label>{style.label}</Checkbox.Label>
            </Checkbox.Root>

            <Text fontSize="sm" color="gray.500">
              {classCounts[className] ?? 0}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}
