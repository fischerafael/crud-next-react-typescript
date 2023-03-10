import { PageTemplate } from "@/src/components/PageTemplate";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { LinkWithIcon } from "../PageLogIn";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { TemplateFormSection } from "@/src/components/TemplateFormSection";

export const PageSignUp = () => {
  return (
    <PageTemplate>
      <TemplateFormSection
        left={
          <>
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
          </>
        }
        right={
          <>
            <Input placeholder="NGO's Name" />
            <Input placeholder="Email" />
            <Input placeholder="WhatsApp" />
            <Chakra.HStack w="full" spacing="4">
              <Input placeholder="City" />
              <Input placeholder="State" />
            </Chakra.HStack>
            <Button type="submit"> Sign Up</Button>
          </>
        }
      />
    </PageTemplate>
  );
};
