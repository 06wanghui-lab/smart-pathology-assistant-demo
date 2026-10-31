// central place to decide on prediction color: used in overlay: css color, region detail head label: chakra color
export const predictionStyles = {
  benign: {
    label: "Benign",
    cssColor: "rgb(59, 130, 246)",
    chakraColor: "blue.400",
    chakraBg: "blue.50",
  },
  stroma: {
    label: "Stroma",
    cssColor: "rgb(249, 115, 22)",
    chakraColor: "orange.400",
    chakraBg: "orange.50",
  },
  gleason3: {
    label: "Gleason 3",
    cssColor: "rgb(34, 197, 94)",
    chakraColor: "green.400",
    chakraBg: "green.50",
  },
  gleason4: {
    label: "Gleason 4",
    cssColor: "rgb(239, 68, 68)",
    chakraColor: "red.400",
    chakraBg: "red.50",
  },
  gleason5: {
    label: "Gleason 5",
    cssColor: "rgb(168, 85, 247)",
    chakraColor: "purple.400",
    chakraBg: "purple.50",
  },
};
