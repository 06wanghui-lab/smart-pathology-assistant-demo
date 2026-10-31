import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import UserMenu from "./UserMenu";
import { NavLink } from "react-router-dom";

function HeaderNavItem({ to, end = false, children }) {
  return (
    <NavLink
      to={to}
      end={end}
      style={{
        textDecoration: "none",
        height: "100%",
      }}
    >
      {({ isActive }) => (
        <Box
          as="span"
          display="flex"
          alignItems="center"
          h="full"
          px="1"
          fontSize={{ base: "sm", md: "md" }}
          color={isActive ? "app.primaryHover" : "app.muted"}
          fontWeight={isActive ? "semibold" : "medium"}
          borderBottomWidth="2px"
          borderBottomColor={isActive ? "app.primary" : "transparent"}
          transition="color 0.2s, border-color 0.2s"
          _hover={{
            color: "app.primary",
          }}
        >
          {children}
        </Box>
      )}
    </NavLink>
  );
}

export default function Header({ user }) {
  return (
    <HStack
      as="header"
      w="full"
      minH={{ base: "64px", md: "76px" }}
      px={{ base: "3", md: "4", lg: "6" }}
      background="linear-gradient(90deg, #ffffff 0%, #ffffff 60%, #f5f9ff 100%)"
      borderBottomWidth="1px"
      borderBottomColor="blue.100"
      boxShadow="0 3px 12px rgba(15, 23, 42, 0.05)"
      gap="0"
    >
      {/* left: logo and brandhing*/}
      <HStack gap="3" flexShrink="0">
        <Image
          src={logo}
          boxSize={{ base: "36px", md: "46px" }}
          objectFit="contain"
          alt="Smart Pathology Assistant"
        />

        <VStack align="start" gap="0" display={{ base: "none", md: "flex" }}>
          <Heading
            fontSize="lg"
            fontWeight="700"
            letterSpacing="-0.02em"
            color="app.text"
            whiteSpace="nowrap"
          >
            Smart Pathology Assistant
          </Heading>

          <Text
            fontSize="xs"
            fontWeight="medium"
            color="app.muted"
            letterSpacing="0.01em"
          >
            AI-assisted slide review
          </Text>
        </VStack>
      </HStack>
      {/* links: viewer history  */}
      <HStack
        ml={{ base: "3", md: "6", lg: "10" }}
        gap={{ base: "4", md: "6", lg: "7" }}
        alignSelf="stretch"
        flexShrink="0"
      >
        <HeaderNavItem to="/" end>
          Viewer
        </HeaderNavItem>

        <HeaderNavItem to="/cases">Cases</HeaderNavItem>

        <HeaderNavItem to="/about">About</HeaderNavItem>
      </HStack>
      <Box flex="1" />
      <UserMenu user={user} />
    </HStack>
  );
}
