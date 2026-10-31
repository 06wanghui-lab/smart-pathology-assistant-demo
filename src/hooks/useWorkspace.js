import { useState } from "react";

const DEFAULT_OVERLAY_OPACITY = 0.6;

export function useWorkspace(activeCaseId, slides) {
  const initialSlide = slides[0];

  // Remember slide navigation separately for each case. A case that has not been
  // visited in this session starts on its first slide.
  const [selectedSlideIdByCase, setSelectedSlideIdByCase] = useState({});
  const selectedSlideId = selectedSlideIdByCase[activeCaseId];
  const selectedSlide =
    slides.find((slide) => slide.id === selectedSlideId) ?? initialSlide;

  const setSelectedSlide = (slide) => {
    setSelectedSlideIdByCase((previous) => ({
      ...previous,
      [activeCaseId]: slide.id,
    }));
  };

  // Opacity is a viewer preference shared by all slides.
  const [overlayOpacity, setOverlayOpacity] = useState(DEFAULT_OVERLAY_OPACITY);

  // Overlay visibility is independent for each slide during this viewer session.
  // An unvisited slide starts with its overlay visible.
  const [showOverlayBySlide, setShowOverlayBySlide] = useState({});

  const currentSlideKey = selectedSlide.slideId;
  const showOverlay = showOverlayBySlide[currentSlideKey] ?? true;

  const setShowOverlay = (checked) => {
    setShowOverlayBySlide((previous) => ({
      ...previous,
      [currentSlideKey]: checked,
    }));
  };

  return {
    selectedSlide,
    setSelectedSlide,
    showOverlay,
    setShowOverlay,
    overlayOpacity,
    setOverlayOpacity,
  };
}
