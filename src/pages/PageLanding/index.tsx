import React from "react";
import * as Chakra from "@chakra-ui/react";
import { PageTemplate } from "@/src/components/PageTemplate";
import { Header } from "@/src/components/Header";
import { ButtonLink } from "@/src/components/ButtonLink";

export const PageLanding = () => {
  return (
    <PageTemplate>
      <>
        <Header
          text={
            <Chakra.Text>
              Total of{" "}
              <Chakra.Text as="span" fontWeight="bold">
                40 cases
              </Chakra.Text>
            </Chakra.Text>
          }
          action={<ButtonLink href="/public/login">Sign In</ButtonLink>}
        />
        <HeroSection />
      </>
    </PageTemplate>
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
