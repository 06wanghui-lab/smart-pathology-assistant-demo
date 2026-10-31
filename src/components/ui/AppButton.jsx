import { Button } from "@chakra-ui/react";

export default function AppButton({ variant = "primary", children, ...props }) {
  const variants = {
    primary: {
      bg: "app.primary",
      color: "white",
      _hover: {
        bg: "app.primaryHover",
      },
      _active: {
        bg: "blue.700",
      },
    },

    secondary: {
      bg: "app.surface",
      color: "app.text",
      borderWidth: "1px",
      borderColor: "app.border",
      _hover: {
        bg: "gray.50",
      },
    },

    ghost: {
      bg: "transparent",
      color: "app.muted",
      _hover: {
        bg: "app.selected",
        color: "app.primary",
      },
    },
  };

  return (
    <Button
      minH="11"
      px="5"
      borderRadius="appControl"
      fontSize="sm"
      fontWeight="600"
      transition="background-color 0.2s, border-color 0.2s"
      {...variants[variant]}
      {...props}
    >
      {children}
    </Button>
  );
}
