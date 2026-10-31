import { VStack, Tabs } from "@chakra-ui/react";

import OverlayControls from "./analysis/OverlayControls";
import RegionDetails from "./analysis/RegionDetails";
import TissueClasses from "./analysis/TissueClasses";

import ReviewNotes from "./notes/ReviewNotes";

export default function ReviewPanel({
  onCompleteCaseReview,
  reviewNotes,
  setReviewNotes,
  visibleClasses,
  onToggleClass,
  classCounts,
  user,
  showOverlay,
  setShowOverlay,
  overlayOpacity,
  setOverlayOpacity,
  selectedPrediction,
  onClearPrediction,
  selectedCase,
  selectedSlide,
  activeTab,
  onTabChange,
  canShowPredictions,
}) {
  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={({ value }) => onTabChange(value)}
      w="100%"
      h="100%"
      minH="0"
      display="flex"
      flexDirection="column"
      overflow="hidden"
      variant="line"
      colorPalette="blue"
      fitted
    >
      <Tabs.List w="100%" flexShrink="0">
        <Tabs.Trigger value="analysis">AI Analysis</Tabs.Trigger>
        <Tabs.Trigger value="notes">Review & Notes</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content
        value="analysis"
        flex="1"
        minH="0"
        overflowY="auto"
        overscrollBehavior="contain"
        scrollbarGutter="stable"
        pr="2"
      >
        <VStack align="stretch" gap="5">
          <OverlayControls
            showOverlay={showOverlay}
            setShowOverlay={setShowOverlay}
            overlayOpacity={overlayOpacity}
            setOverlayOpacity={setOverlayOpacity}
            canShowPredictions={canShowPredictions}
          />

          <TissueClasses
            visibleClasses={visibleClasses}
            onToggleClass={onToggleClass}
            showOverlay={showOverlay}
            classCounts={classCounts}
            isReady={canShowPredictions}
          />

          <RegionDetails
            showOverlay={showOverlay}
            selectedPrediction={selectedPrediction}
            onClearPrediction={onClearPrediction}
          />
        </VStack>
      </Tabs.Content>

      <Tabs.Content
        value="notes"
        flex="1"
        minH="0"
        overflowY="auto"
        overscrollBehavior="contain"
        scrollbarGutter="stable"
        pr="2"
      >
        <ReviewNotes
          onCompleteCaseReview={onCompleteCaseReview}
          notes={reviewNotes}
          setNotes={setReviewNotes}
          user={user}
          selectedCase={selectedCase}
          selectedSlide={selectedSlide}
        />
      </Tabs.Content>
    </Tabs.Root>
  );
}
