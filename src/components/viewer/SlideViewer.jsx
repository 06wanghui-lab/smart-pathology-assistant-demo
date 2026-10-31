import { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";

// helper
import { renderPredictionOverlays } from "../../utils/predictionOverlays";

export default function SlideViewer({
  imageUrl,
  showOverlay,
  overlayOpacity,
  predictions,
  onSelectPrediction,
  selectedPredictionId,
}) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const overlayElementsRef = useRef([]);
  const overlayOpacityRef = useRef(overlayOpacity);
  useEffect(() => {
    if (!containerRef.current || !imageUrl) return;
    // effect 1: initialise openseadragon and load the image
    const tileSource = imageUrl.toLowerCase().endsWith(".dzi")
      ? imageUrl
      : {
          type: "image",
          url: imageUrl,
        };
    const viewer = OpenSeadragon({
      element: containerRef.current,
      tileSources: tileSource,
      showNavigationControl: true,
      gestureSettingsMouse: {
        clickToZoom: false,
        dblClickToZoom: true,
        dragToPan: true,
        scrollToZoom: true,
      },
    });
    viewerRef.current = viewer;

    return () => {
      viewerRef.current = null;
      viewer.destroy();
    };
  }, [imageUrl]);

  // effect 2: Respond to changes in showOverlay , if overlay->show sth ON TOP,use openseadragon viwer.addOverlay

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !showOverlay) return;

    const addOverlays = () => {
      const image = viewer.world.getItemAt(0);

      if (!image || overlayElementsRef.current.length > 0) return;

      overlayElementsRef.current = renderPredictionOverlays(
        viewer,
        predictions,
        overlayOpacityRef.current,
      );
    };

    // Add overlays when the slide finishes opening.
    viewer.addHandler("open", addOverlays); // register even listener: when image finishes opening. call this

    // If the slide is already open, add them immediately.
    if (viewer.world.getItemCount() > 0) {
      addOverlays();
    }
    return () => {
      //clean up
      viewer.removeHandler("open", addOverlays);
      overlayElementsRef.current.forEach((box) => {
        viewer.removeOverlay(box);
      });
      overlayElementsRef.current = [];
    };
  }, [showOverlay, imageUrl, predictions]);

  // 3. change opacity
  useEffect(() => {
    overlayOpacityRef.current = overlayOpacity;
    overlayElementsRef.current.forEach((element, index) => {
      const isSelected = predictions[index]?.id === selectedPredictionId;

      element.style.opacity = overlayOpacity;
      element.style.border = isSelected ? "3px solid white" : "1px solid white";
      element.style.boxShadow = isSelected
        ? "0 0 0 2px rgba(15,23,42,0.9)"
        : "none";
      element.style.zIndex = isSelected ? "1" : "0";
    });
  }, [overlayOpacity, predictions, selectedPredictionId, showOverlay]);

  //4. interaction with OSD canvas, click show pred
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !showOverlay) {
      return;
    }
    const handleCanvasClick = (event) => {
      //ignore dragging, only handle a quick click
      if (!event.quick) {
        return;
      }
      const image = viewer.world.getItemAt(0);
      if (!image) {
        return;
      }

      const viewportPoint = viewer.viewport.pointFromPixel(event.position);
      const imagePoint = image.viewportToImageCoordinates(viewportPoint);
      const prediction = predictions.find((prediction) => {
        return (
          // find a prediction rectangle that containing original image coordinate of the click
          imagePoint.x >= prediction.x &&
          imagePoint.x < prediction.x + prediction.w &&
          imagePoint.y >= prediction.y &&
          imagePoint.y < prediction.y + prediction.h
        );
      });
      if (prediction) {
        onSelectPrediction(prediction);
      }
    };
    viewer.addHandler("canvas-click", handleCanvasClick);
    return () => {
      viewer.removeHandler("canvas-click", handleCanvasClick);
    };
  }, [showOverlay, imageUrl, predictions, onSelectPrediction]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "clamp(400px, 70vh, 800px)",
        backgroundColor: "#111",
      }}
    />
  );
}
