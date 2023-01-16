import { PageTemplate } from "@/src/components/PageTemplate";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import NextLink from "next/link";

export const PageLogIn = () => {
  return (
    <PageTemplate>
      <MainSection />
    </PageTemplate>
  );
};

export const MainSection = () => {
  return (
    <Chakra.Grid minH="90vh" templateColumns="1fr 1fr" justifyContent="center">
      <Chakra.VStack justify="center" align="flex-start" spacing="8">
        <Chakra.Image src="/logo.svg" />
        <Chakra.VStack spacing="4" align="flex-start" w="full" maxW="300px">
          <Chakra.Text fontWeight="bold" fontSize="2xl">
            Log In
          </Chakra.Text>
          <Chakra.Input fontSize="sm" />
          <Chakra.Button colorScheme="red" px="8" w="full">
            Log In
          </Chakra.Button>
        </Chakra.VStack>
        <Chakra.VStack spacing="2" align="flex-start">
          <NextLink href="/public/signup">
            <Chakra.HStack>
              <Chakra.Icon color="red.500" as={Icon.HiOutlineLogout} />
              <Chakra.Text color="gray.700" fontWeight="semibold" fontSize="xs">
                I don't have an account yet
              </Chakra.Text>
            </Chakra.HStack>
          </NextLink>
          <NextLink href="/">
            <Chakra.HStack>
              <Chakra.Icon color="red.500" as={Icon.HiOutlineHome} />
              <Chakra.Text color="gray.700" fontWeight="semibold" fontSize="xs">
                Back to Home
              </Chakra.Text>
            </Chakra.HStack>
          </NextLink>
        </Chakra.VStack>
      </Chakra.VStack>
      <Chakra.VStack justify="center">
        <Chakra.Image src="/hero-image.svg" />
      </Chakra.VStack>
    </Chakra.Grid>
  );
};
