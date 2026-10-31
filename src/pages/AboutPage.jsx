import { Heading, Link, Text, VStack } from "@chakra-ui/react";

const externalLinkStyles = {
  color: "app.primary",
  fontWeight: "medium",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  _hover: {
    color: "app.primaryHover",
  },
};

export default function AboutPage() {
  return (
    <VStack
      align="stretch"
      gap="5"
      w="full"
      maxW="820px"
      mx="auto"
      py={{ base: "4", md: "8" }}
    >
      <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }}>
        About Smart Pathology Assistant
      </Heading>

      <VStack align="stretch" gap="4">
        <Text color="app.muted" lineHeight="1.9">
          Smart Pathology Assistant was developed as a complete university
          course project comprising a frontend application, backend services,
          authentication and session management, and a UNI-based
          machine-learning pipeline. This website is a standalone static
          version created specifically to demonstrate the frontend
          slide-viewing and prediction-overlay experience. To make the
          demonstration publicly accessible without depending on a running
          backend or machine-learning service, it uses preloaded PANDA slide
          tiles and pre-generated prediction results stored as static JSON
          files. It demonstrates the viewing and review workflow but does not
          accept slide uploads, call the original backend or generate new
          predictions.
        </Text>

        <Text color="app.muted" lineHeight="1.9">
          The displayed slide samples come from the publicly available{" "}
          <Link
            href="https://www.kaggle.com/competitions/prostate-cancer-grade-assessment"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            Prostate cANcer graDe Assessment (PANDA) Challenge dataset
          </Link>
          . The prediction overlays were generated before deployment by the
          project&apos;s machine-learning pipeline. The pipeline divides each
          slide into image patches, uses UNI to extract pathology image
          features, and applies a trained classifier to assign a tissue class
          to each patch. Further information about the foundation model is
          available in the{" "}
          <Link
            href="https://arxiv.org/pdf/2308.15474"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            UNI research paper
          </Link>
          . This static website only reads the saved prediction results and does
          not run a machine-learning service or generate new predictions.
        </Text>

        <Text color="app.muted" lineHeight="1.9">
          This application is provided solely for educational and demonstration
          purposes. It is not a medical device, and its predictions have not
          been clinically validated. It must not be used for medical diagnosis,
          treatment decisions or any form of real patient care.
        </Text>
      </VStack>
    </VStack>
  );
}
