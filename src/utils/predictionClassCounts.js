export function countPredictionsByClass(predictions) {
  const counts = {};

  for (const prediction of predictions) {
    const className = prediction.label;

    counts[className] = (counts[className] ?? 0) + 1;
  }

  return counts;
}
