import { useState, useMemo } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";

//data

import { predictionStyles } from "../constants/predictionStyles";

// hook
import { useWorkspace } from "../hooks/useWorkspace";
import { useSlideAnalysis } from "../hooks/useSlideAnalysis";

// components
import CaseSlideSidebar from "../components/viewer/CaseSlideSidebar";
import ReviewPanel from "../components/viewer/ReviewPanel";
import SlideViewer from "../components/viewer/SlideViewer";
import SlideWorkspaceHeader from "../components/viewer/SlideWorkspaceHeader";

//chakra / ui. icon stuff
import { Box, Grid, GridItem } from "@chakra-ui/react";
const ALL_CLASSES = Object.keys(predictionStyles);

//page after logging in
function ViewerPage() {
  const { user, cases, reviewNotes, setReviewNotes, completeCaseReview } =
    useOutletContext();
  const [searchParams] = useSearchParams();
  const requestedCaseId = searchParams.get("caseId");

  const activeCase =
    cases.find((caseItem) => caseItem.id === requestedCaseId) ?? cases[0];

  const {
    selectedSlide,
    setSelectedSlide,
    showOverlay,
    setShowOverlay,
    overlayOpacity,
    setOverlayOpacity,
  } = useWorkspace(activeCase.id, activeCase.slides);

  const { analysisStatus, predictions, classCounts } =
    useSlideAnalysis(selectedSlide);

  const canShowPredictions = analysisStatus === "done";

  const visibleOverlay = canShowPredictions && showOverlay;

  const [selectedPredictionIdBySlide, setSelectedPredictionIdBySlide] =
    useState({});

  const currentSlideKey = selectedSlide.slideId;

  const selectedPredictionId =
    selectedPredictionIdBySlide[currentSlideKey] ?? null;

  const selectedPrediction =
    predictions.find((prediction) => prediction.id === selectedPredictionId) ??
    null;

  const [activeReviewTab, setActiveReviewTab] = useState("analysis");

  const [visibleClassesBySlide, setVisibleClassesBySlide] = useState({});
  const visibleClasses =
    visibleClassesBySlide[selectedSlide.slideId] ?? ALL_CLASSES;
  const visiblePredictions = useMemo(
    () =>
      predictions.filter((prediction) =>
        visibleClasses.includes(prediction.label),
      ),
    [predictions, visibleClasses],
  );
  const handleSelectPrediction = (prediction) => {
    setSelectedPredictionIdBySlide((previous) => ({
      ...previous,
      [currentSlideKey]: prediction.id,
    }));

    setActiveReviewTab("analysis");
  };

  const handleClearPrediction = () => {
    setSelectedPredictionIdBySlide((previous) => ({
      ...previous,
      [currentSlideKey]: null,
    }));
  };

  const handleSelectSlide = (slide) => {
    if (slide.id === selectedSlide.id) {
      return;
    }

    setSelectedSlide(slide);
  };

  const handleToggleClass = (className, checked) => {
    const slideKey = selectedSlide.slideId;

    setVisibleClassesBySlide((previous) => {
      const currentClasses = previous[slideKey] ?? ALL_CLASSES;

      const nextClasses = checked
        ? [...new Set([...currentClasses, className])]
        : currentClasses.filter((name) => name !== className);

      return {
        ...previous,
        [slideKey]: nextClasses,
      };
    });

    if (!checked && selectedPrediction?.label === className) {
      handleClearPrediction();
    }
  };

  return (
    <Grid
      h={{ base: "auto", lg: "calc(100dvh - 147px)" }}
      minH="0"
      gap="4"
      templateAreas={{
        base: `"main"`,
        lg: `"cases main review"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px minmax(0, 1fr) 300px",
        xl: "260px minmax(0, 1fr) 360px",
      }}
    >
      {/* left: slide selection  */}
      <CaseSlideSidebar
        caseItem={activeCase}
        selectedSlideId={selectedSlide.id}
        onSelectSlide={handleSelectSlide}
      />
      {/* Centre: Main slide area */}
      <GridItem area="main" minW="0">
        <SlideWorkspaceHeader caseItem={activeCase} slide={selectedSlide} />

        <Box
          overflow="hidden"
          bg="gray.900"
          borderRadius="appCard"
          boxShadow="appCard"
        >
          <SlideViewer
            key={selectedSlide.id}
            imageUrl={selectedSlide.viewerSource}
            showOverlay={visibleOverlay}
            overlayOpacity={overlayOpacity}
            predictions={visiblePredictions}
            selectedPredictionId={selectedPredictionId}
            onSelectPrediction={handleSelectPrediction}
          />
        </Box>
      </GridItem>

      {/* Right: AI controls / details / notes */}
      <GridItem
        area="review"
        display={{ base: "none", lg: "block" }}
        layerStyle="appPanel"
        p="5"
        minH="0"
        overflow="hidden"
      >
        <ReviewPanel
          onCompleteCaseReview={completeCaseReview}
          reviewNotes={reviewNotes}
          setReviewNotes={setReviewNotes}
          classCounts={classCounts}
          visibleClasses={visibleClasses}
          onToggleClass={handleToggleClass}
          selectedCase={activeCase}
          selectedSlide={selectedSlide}
          user={user}
          showOverlay={visibleOverlay}
          setShowOverlay={setShowOverlay}
          canShowPredictions={canShowPredictions}
          overlayOpacity={overlayOpacity}
          setOverlayOpacity={setOverlayOpacity}
          selectedPrediction={selectedPrediction}
          onClearPrediction={handleClearPrediction}
          activeTab={activeReviewTab}
          onTabChange={setActiveReviewTab}
        />
      </GridItem>
    </Grid>
  );
}

export default ViewerPage;
