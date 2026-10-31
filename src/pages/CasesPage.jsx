import { reviewStatusStyles } from "../constants/reviewStatusStyles";

import { Badge, Box, Heading, HStack, Table, Text } from "@chakra-ui/react";

import AppButton from "../components/ui/AppButton";

import { useNavigate, useOutletContext } from "react-router-dom";

export default function CasesPage() {
  const navigate = useNavigate();
  const { cases } = useOutletContext();
  return (
    <Box maxW="1200px" mx="auto" w="full" py={{ base: "4", lg: "6" }}>
      <Heading textStyle="appPageTitle" color="app.text">
        Cases
      </Heading>

      <Text textStyle="appBody" color="app.muted" mt="2" mb="6">
        Select a patient case to review its slides.
      </Text>

      <Box layerStyle="appPanel" overflow="hidden">
        <Box overflowX="auto">
          <Table.Root size="sm" minW="760px">
            <Table.Header>
              <Table.Row bg="gray.100" h="14">
                <Table.ColumnHeader minW="260px">Case</Table.ColumnHeader>

                <Table.ColumnHeader minW="170px">Patient</Table.ColumnHeader>

                <Table.ColumnHeader minW="110px">Slides</Table.ColumnHeader>

                <Table.ColumnHeader minW="140px">Status</Table.ColumnHeader>

                <Table.ColumnHeader minW="150px" textAlign="center">
                  Action
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {cases.map((caseItem) => {
                const status =
                  reviewStatusStyles[caseItem.reviewStatus] ??
                  reviewStatusStyles["not-reviewed"];

                const slideCount = caseItem.slides.length;

                return (
                  <Table.Row
                    key={caseItem.id}
                    _hover={{ bg: "gray.50" }}
                    transition="background-color 0.2s"
                  >
                    <Table.Cell>
                      <Text fontWeight="semibold" color="app.text">
                        {caseItem.name}
                      </Text>

                      <Text fontSize="sm" color="app.muted">
                        {caseItem.description}
                      </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text fontWeight="medium" color="app.text">
                        {caseItem.patient.name}
                      </Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Badge
                        colorPalette="gray"
                        variant="subtle"
                        borderRadius="full"
                        px="2.5"
                        py="1"
                      >
                        {slideCount} {slideCount === 1 ? "slide" : "slides"}
                      </Badge>
                    </Table.Cell>

                    <Table.Cell>
                      <Badge
                        colorPalette={status.colorPalette}
                        variant="subtle"
                        borderRadius="full"
                        px="2.5"
                        py="1"
                        fontWeight="medium"
                      >
                        {status.label}
                      </Badge>
                    </Table.Cell>

                    <Table.Cell>
                      <HStack justify="center">
                        <AppButton
                          variant="secondary"
                          size="sm"
                          minH="9"
                          px="3"
                          onClick={() => navigate(`/?caseId=${caseItem.id}`)}
                        >
                          View case
                        </AppButton>
                      </HStack>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </Box>
  );
}
