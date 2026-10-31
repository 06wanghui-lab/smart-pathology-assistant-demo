import { predictionStyles } from "../constants/predictionStyles";

/**
 * Render color-coded prediction patches on an OpenSeadragon viewer.
 * Convert image coordinates to viewport coordinates so overlays stay
 * aligned during zoom and pan.
 * Return created HTML elements for cleanup when overlays are removed.
 */

export function renderPredictionOverlays(viewer, predictions, opacity) {
  const image = viewer.world.getItemAt(0);
  if (!image) return [];

  return predictions.map((prediction) => {
    const box = document.createElement("div");

    box.style.backgroundColor =
      predictionStyles[prediction.label]?.cssColor ?? "gray";
    box.style.opacity = opacity;
    box.style.border = "1px solid white";
    box.style.boxSizing = "border-box";
    box.style.pointerEvents = "none";

    viewer.addOverlay({
      element: box,
      location: image.imageToViewportRectangle(
        prediction.x,
        prediction.y,
        prediction.w,
        prediction.h,
      ),
    });

    return box;
  });
}
