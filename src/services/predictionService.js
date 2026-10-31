export async function getSavedPrediction(slideId) {
  const response = await fetch(`/predictions/${slideId}.json`);

  if (!response.ok) {
    throw new Error(`Prediction file not found for ${slideId}`);
  }

  return response.json();
}
