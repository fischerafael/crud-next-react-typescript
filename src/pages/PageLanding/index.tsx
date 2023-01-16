import React from "react";
import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";
import { PageTemplate } from "@/src/components/PageTemplate";

export const PageLanding = () => {
  return (
    <PageTemplate>
      <>
        <Header />
        <HeroSection />
      </>
    </PageTemplate>
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
      <Chakra.Button
        href="/public/login"
        as={NextLink}
        colorScheme="red"
        px="8"
      >
        Sign In
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
