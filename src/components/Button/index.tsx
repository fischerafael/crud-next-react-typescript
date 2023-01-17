import React from "react";
import * as Chakra from "@chakra-ui/react";

interface ButtonProps extends Chakra.ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Chakra.Button colorScheme="red" h="12" px="8" w="full" {...props}>
      {children}
    </Chakra.Button>
  );
};
