import {
  Box,
  Heading,
  HStack,
  Slider,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function OverlayControls({
  showOverlay,
  setShowOverlay,
  overlayOpacity,
  setOverlayOpacity,
  canShowPredictions,
}) {
  return (
    <Box borderWidth="1px" borderRadius="md" p="4">
      <Heading size="sm" mb="1">
        Overlay Controls
      </Heading>

      <Text fontSize="xs" color="gray.500" mb="4">
        Control how AI-classified regions appear on the slide.
      </Text>

      <VStack align="stretch" gap="4">
        <HStack>
          <Switch.Root
            checked={showOverlay}
            disabled={!canShowPredictions}
            onCheckedChange={(details) => setShowOverlay(details.checked)}
          >
            <Switch.HiddenInput />
            <Switch.Control />
          </Switch.Root>

          <Text fontSize="sm" fontWeight="medium">
            Show AI overlay
          </Text>
        </HStack>

        {!canShowPredictions && (
          <Text fontSize="xs" color="gray.500">
            Run AI analysis to enable predictions.
          </Text>
        )}

        <Slider.Root
          width="100%"
          min={0}
          max={1}
          step={0.05}
          value={[overlayOpacity]}
          onValueChange={(details) => setOverlayOpacity(details.value[0])}
          disabled={!showOverlay}
        >
          <HStack justify="space-between" mb="2">
            <Slider.Label fontSize="sm" fontWeight="medium">
              Overlay opacity
            </Slider.Label>

            <Text fontSize="sm" color="gray.600">
              {Math.round(overlayOpacity * 100)}%
            </Text>
          </HStack>

          <Slider.Control>
            <Slider.Track>
              <Slider.Range />
            </Slider.Track>

            <Slider.Thumbs />
          </Slider.Control>
        </Slider.Root>
      </VStack>
    </Box>
  );
}
