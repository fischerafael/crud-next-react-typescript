import React from "react";
import * as Chakra from "@chakra-ui/react";

interface TextAreaProps extends Chakra.TextareaProps {}

export const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <Chakra.Textarea
      border="1px"
      borderColor="gray.300"
      bg="white"
      fontSize="sm"
      h="12"
      {...props}
    />
  );
};
