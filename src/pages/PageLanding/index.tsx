import React from "react";
import * as Chakra from "@chakra-ui/react";

export const PageLanding = () => {
  return (
    <Chakra.Grid
      w="full"
      bg="gray.50"
      minH="100vh"
      justifyItems="center"
      alignContent="flex-start"
    >
      <Chakra.Grid w="full" maxW="container.lg">
        <Header />
        <HeroSection />
      </Chakra.Grid>
    </Chakra.Grid>
  );
};

export const Header = () => {
  return (
    <Chakra.HStack h="10vh" w="full" justify="space-between">
      <Chakra.HStack spacing="8">
        <Chakra.Image src="/logo.svg" alt="Logo" w="96px" />
        <Chakra.Text>
          Total of{" "}
          <Chakra.Text as="span" fontWeight="bold">
            40 cases
          </Chakra.Text>
        </Chakra.Text>
      </Chakra.HStack>
      <Chakra.Button colorScheme="red" px="8">
        Sign Up
      </Chakra.Button>
    </Chakra.HStack>
  );
};

export const HeroSection = () => {
  return (
    <Chakra.Grid minH="90vh" templateColumns="1fr 1fr" justifyContent="center">
      <Chakra.VStack justify="center" align="flex-start" spacing="8">
        <Chakra.Image src="/logo.svg" />
        <Chakra.VStack spacing="2" align="flex-start">
          <Chakra.Text fontWeight="bold" fontSize="4xl">
            Welcome!
          </Chakra.Text>
          <Chakra.Text maxW="400px">
            Be The Hero is a platform where you can help pets that were rescued
            by NGOs
          </Chakra.Text>
        </Chakra.VStack>
        <Chakra.Button colorScheme="red" px="8">
          I Want To Help
        </Chakra.Button>
      </Chakra.VStack>
      <Chakra.VStack justify="center">
        <Chakra.Image src="/hero-image.svg" />
      </Chakra.VStack>
    </Chakra.Grid>
  );
};
