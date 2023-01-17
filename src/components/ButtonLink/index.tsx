import React from "react";
import * as Chakra from "@chakra-ui/react";
import NextLink from "next/link";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ButtonLink = ({ href, children, ...props }: ButtonLinkProps) => {
  return (
    <Chakra.Button
      href={href}
      as={NextLink}
      colorScheme="red"
      px="8"
      h="12"
      maxW="200px"
      {...props}
    >
      {children}
    </Chakra.Button>
  );
};
