import { useEffect, useMemo, useState } from "react";

import { countPredictionsByClass } from "../utils/predictionClassCounts";
import { getSavedPrediction } from "../services/predictionService";

const EMPTY_PREDICTIONS = [];

export function useSlideAnalysis(selectedSlide) {
  const [analysis, setAnalysis] = useState({
    slideId: null,
    status: "checking",
    predictions: EMPTY_PREDICTIONS,
  });

  useEffect(() => {
    let cancelled = false;

    getSavedPrediction(selectedSlide.slideId)
      .then((result) => {
        if (cancelled) return;

        setAnalysis({
          slideId: selectedSlide.slideId,
          status: "done",
          predictions: result.predictions ?? EMPTY_PREDICTIONS,
        });
      })
      .catch(() => {
        if (cancelled) return;

        setAnalysis({
          slideId: selectedSlide.slideId,
          status: "error",
          predictions: EMPTY_PREDICTIONS,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [selectedSlide.slideId]);

  const isCurrentSlide = analysis.slideId === selectedSlide.slideId;
  const analysisStatus = isCurrentSlide ? analysis.status : "checking";
  const predictions = isCurrentSlide
    ? analysis.predictions
    : EMPTY_PREDICTIONS;

  const classCounts = useMemo(
    () => countPredictionsByClass(predictions),
    [predictions],
  );

  return {
    analysisStatus,
    predictions,
    classCounts,
  };
}
