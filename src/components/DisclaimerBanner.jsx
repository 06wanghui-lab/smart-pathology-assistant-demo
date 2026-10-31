import { HStack, Text } from "@chakra-ui/react";
import { LuTriangleAlert } from "react-icons/lu";

export default function DisclaimerBanner() {
  return (
    <HStack
      as="aside"
      role="note"
      aria-label="Demonstration disclaimer"
      gap="2.5"
      px={{ base: "3", md: "4", lg: "6" }}
      py="2"
      bg="orange.50"
      color="orange.900"
      borderBottomWidth="1px"
      borderBottomColor="orange.200"
      align="flex-start"
    >
      <LuTriangleAlert aria-hidden="true" size="17" style={{ marginTop: 2 }} />
      <Text fontSize="sm" lineHeight="1.45">
        <Text as="span" fontWeight="semibold">
          Static demonstration only.
        </Text>{" "}
        Uses publicly available PANDA data and pre-generated predictions. Not
        for medical diagnosis, treatment decisions or patient care.
      </Text>
    </HStack>
  );
}
