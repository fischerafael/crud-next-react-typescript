import React from "react";
import * as Chakra from "@chakra-ui/react";

interface InputProps extends Chakra.InputProps {}

export const Input = ({ ...props }: InputProps) => {
  return (
    <Chakra.Input
      border="1px"
      borderColor="gray.300"
      bg="white"
      fontSize="sm"
      h="12"
      {...props}
    />
  );
};
