import { PageTemplate } from "@/src/components/PageTemplate";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { LinkWithIcon } from "../PageLogIn";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

export const PageSignUp = () => {
  return (
    <PageTemplate>
      <MainSection />
    </PageTemplate>
  );
};

export const MainSection = () => {
  return (
    <Chakra.Grid
      minH="90vh"
      templateColumns="1fr"
      alignItems="center"
      justifyContent="center"
    >
      <Chakra.Grid
        justifyContent="center"
        alignItems="flex-start"
        gap="8"
        shadow="xl"
        templateColumns="1fr 1fr"
        padding="16"
        borderRadius="16"
        border="1px"
        borderColor="gray.300"
      >
        <Chakra.VStack align="flex-start" spacing="8">
          <Chakra.Image src="/logo.svg" />
          <Chakra.VStack spacing="4" align="flex-start" w="full" maxW="300px">
            <Chakra.Text fontWeight="bold" fontSize="2xl">
              Sign Up
            </Chakra.Text>
            <Chakra.Text maxW="400px">
              Register, enter the platform and let people help you help your
              NGO's pets.
            </Chakra.Text>
          </Chakra.VStack>
          <Chakra.VStack spacing="2" align="flex-start">
            <LinkWithIcon
              href="/public/login"
              icon={Icon.HiOutlineLogout}
              text="I already have an account"
            />
            <LinkWithIcon
              href="/"
              icon={Icon.HiOutlineHome}
              text="Back to Home"
            />
          </Chakra.VStack>
        </Chakra.VStack>

        <Chakra.VStack w="full" as="form" spacing="4">
          <Input placeholder="NGO's Name" />
          <Input placeholder="Email" />
          <Input placeholder="WhatsApp" />
          <Chakra.HStack w="full" spacing="4">
            <Input placeholder="City" />
            <Input placeholder="State" />
          </Chakra.HStack>
          <Button type="submit"> Sign Up</Button>
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.Grid>
  );
};
