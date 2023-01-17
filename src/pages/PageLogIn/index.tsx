import { PageTemplate } from "@/src/components/PageTemplate";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import NextLink from "next/link";
import { IconType } from "react-icons/lib";
import { Input } from "@/src/components/Input";
import { Button } from "@/src/components/Button";

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
        <Chakra.VStack
          spacing="4"
          align="flex-start"
          w="full"
          maxW="300px"
          as="form"
        >
          <Chakra.Text fontWeight="bold" fontSize="2xl">
            Log In
          </Chakra.Text>
          <Chakra.Input fontSize="sm" />
          <Input placeholder="Email" />
          <Button type="submit"> Log In</Button>
        </Chakra.VStack>
        <Chakra.VStack spacing="2" align="flex-start">
          <LinkWithIcon
            href="/public/signup"
            icon={Icon.HiOutlineLogout}
            text="I don't have an account yet"
          />
          <LinkWithIcon
            href="/"
            icon={Icon.HiOutlineHome}
            text="Back to Home"
          />
        </Chakra.VStack>
      </Chakra.VStack>
      <Chakra.VStack justify="center">
        <Chakra.Image src="/hero-image.svg" />
      </Chakra.VStack>
    </Chakra.Grid>
  );
};

interface LinkWithIconProps {
  href: string;
  icon: IconType;
  text: string;
}

export const LinkWithIcon = ({ href, icon, text }: LinkWithIconProps) => {
  return (
    <NextLink href={href}>
      <Chakra.HStack>
        <Chakra.Icon color="red.500" as={icon} />
        <Chakra.Text color="gray.700" fontWeight="semibold" fontSize="xs">
          {text}
        </Chakra.Text>
      </Chakra.HStack>
    </NextLink>
  );
};
