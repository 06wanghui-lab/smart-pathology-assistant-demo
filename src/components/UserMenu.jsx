import { HStack, Text } from "@chakra-ui/react";

export default function UserMenu({ user }) {
  return (
    <HStack
      gap="2"
      h={{ base: "10", md: "11" }}
      px={{ base: "2", md: "3" }}
      bg="white"
      borderWidth="1px"
      borderColor="app.border"
      borderRadius="full"
      boxShadow="0 1px 2px rgba(15, 23, 42, 0.04)"
    >
      <Text
        display={{ base: "none", md: "block" }}
        maxW="120px"
        truncate
        fontWeight="medium"
      >
        {user.name}
      </Text>
    </HStack>
  );
}
