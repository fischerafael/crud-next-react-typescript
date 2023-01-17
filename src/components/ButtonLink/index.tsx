import React from "react";
import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Chakra.Button href={href} as={NextLink} colorScheme="red" px="8" h="12">
      {children}
    </Chakra.Button>
  );
};
