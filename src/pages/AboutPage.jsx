import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { LuExternalLink, LuHeart } from "react-icons/lu";

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

      <Box
        layerStyle="appPanel"
        borderWidth="2px"
        borderColor="app.primary"
        p={{ base: "5", md: "6" }}
      >
        <VStack align="stretch" gap="3">
          <Text
            color="app.primary"
            fontSize="sm"
            fontWeight="700"
            letterSpacing="0.04em"
            textTransform="uppercase"
          >
            29th NUS School of Computing Term Project Showcase
          </Text>

          <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }}>
            Featured at STePS
          </Heading>

          <Text color="app.muted" lineHeight="1.8">
            View our official IT5007 project page. If you enjoy our demo, please
            vote for us!
          </Text>

          <HStack align="stretch" flexWrap="wrap" gap="3" pt="1">
            <Link
              href="https://uvents.nus.edu.sg/event/29th-steps/module/IT5007/project/2"
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap="2"
              minH="11"
              px="5"
              bg="app.primary"
              color="white"
              borderRadius="appControl"
              fontSize="sm"
              fontWeight="600"
              textDecoration="none"
              _hover={{ bg: "app.primaryHover", textDecoration: "none" }}
            >
              View Official Project Page
              <LuExternalLink aria-hidden="true" />
            </Link>

            <Link
              href="https://uvents.nus.edu.sg/event/29th-steps/vote"
              target="_blank"
              rel="noreferrer"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              gap="2"
              minH="11"
              px="5"
              bg="purple.600"
              color="white"
              borderRadius="appControl"
              fontSize="sm"
              fontWeight="600"
              textDecoration="none"
              _hover={{ bg: "purple.700", textDecoration: "none" }}
            >
              Vote for Us at STePS
              <LuHeart aria-hidden="true" />
            </Link>
          </HStack>

          <Text color="app.muted" fontSize="xs">
            On the voting page, select IT5007 Project 2. A valid event voting
            token is required.
          </Text>
        </VStack>
      </Box>

      <VStack align="stretch" gap="4">
        <Text color="app.muted" lineHeight="1.9">
          Smart Pathology Assistant was developed as a complete university
          course project comprising a frontend application, backend services,
          authentication and session management, and a UNI-based
          machine-learning pipeline. This website is a standalone static version
          created specifically to demonstrate the frontend slide-viewing and
          prediction-overlay experience. To make the demonstration publicly
          accessible without depending on a running backend or machine-learning
          service, it uses preloaded PANDA slide tiles and pre-generated
          prediction results stored as static JSON files. It demonstrates the
          viewing and review workflow but does not accept slide uploads, call
          the original backend or generate new predictions.
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
          . This demonstration uses a five-slide subset that was converted from
          the original TIFF whole-slide images into DZI tiles for browser-based
          viewing. These PANDA-derived assets are used under the{" "}
          <Link
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            CC BY-NC-SA 4.0 licence
          </Link>
          ; please refer to the{" "}
          <Link
            href="https://doi.org/10.1038/s41591-021-01620-2"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            PANDA publication
          </Link>{" "}
          for the dataset citation. The prediction overlays were generated
          before deployment by the project&apos;s machine-learning pipeline. The
          pipeline divides each slide into image patches, uses{" "}
          <Link
            href="https://huggingface.co/MahmoodLab/UNI"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            UNI
          </Link>
          , a pathology foundation model developed by Mahmood Lab AI for
          Pathology at Harvard/BWH, to extract image features, and applies a
          trained classifier to assign a tissue class to each patch. UNI is
          provided under{" "}
          <Link
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            CC BY-NC-ND 4.0
          </Link>{" "}
          for non-commercial academic research; please refer to the{" "}
          <Link
            href="https://doi.org/10.1038/s41591-024-02857-3"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            official UNI publication
          </Link>
          . This static website only reads the saved prediction results and does
          not run a machine-learning service, generate new predictions, or
          distribute UNI model weights or checkpoints.
        </Text>

        <Text color="app.muted" lineHeight="1.9">
          The source code for this static demonstration is available in the{" "}
          <Link
            href="https://github.com/06wanghui-lab/smart-pathology-assistant-demo"
            target="_blank"
            rel="noreferrer"
            {...externalLinkStyles}
          >
            Smart Pathology Assistant Demo GitHub repository
          </Link>
          .
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
