import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export default extendTheme(
  { config },
  {
    colors: {
      brand: {
        100: "#3d84f7",
      },
    },
    fonts: {
      body: "'Nunito', sans-serif",
    },
    styles: {
      global: () => ({
        body: {
          bg: "#1A202C",
          color: "white",
        },
      }),
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          textTransform: "uppercase",
          bg: "gray.600",
        },
        sizes: {
          sm: {
            h: "40px",
            fontSize: "sm",
            px: "18px",
          },
        },
        variants: {
          "with-shadow": {
            bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde",
          },
          sm: {
            bg: "#4A5568",
            fontSize: "sm",

            _hover: {
              bg: "#718096",
            },
          },
        },
        defaultProps: {
          variant: "sm",
        },
      },
    },
  }
);
