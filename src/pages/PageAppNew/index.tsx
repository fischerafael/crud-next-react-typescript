import { PageTemplate } from "@/src/components/PageTemplate";
import { TemplateFormSection } from "@/src/components/TemplateFormSection";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { LinkWithIcon } from "../PageLogIn";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";
import { TextArea } from "@/src/components/TextArea";

export const PageAppNew = () => {
  return (
    <PageTemplate>
      <TemplateFormSection
        left={
          <>
            <Chakra.Image src="/logo.svg" />
            <Chakra.VStack spacing="4" align="flex-start" w="full" maxW="300px">
              <Chakra.Text fontWeight="bold" fontSize="2xl">
                Add New Case
              </Chakra.Text>
              <Chakra.Text maxW="400px">
                Describe the case in detail to find a hero to solve it.
              </Chakra.Text>
            </Chakra.VStack>
            <Chakra.VStack spacing="2" align="flex-start">
              <LinkWithIcon
                href="/app"
                icon={Icon.HiOutlineHome}
                text="Back to App"
              />
            </Chakra.VStack>
          </>
        }
        right={
          <>
            <Input placeholder="Case Title" />
            <TextArea placeholder="Description" minH="200px" />
            <Input placeholder="Amount (U$)" type="number" />
            <Chakra.HStack w="full" justify="flex-end">
              <Button type="submit" maxW="200px">
                Add
              </Button>
            </Chakra.HStack>
          </>
        }
      />
    </PageTemplate>
  );
};
