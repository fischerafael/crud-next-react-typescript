import * as Chakra from "@chakra-ui/react";
import { ReactNode } from "react";

interface HeaderProps {
  text: ReactNode;
  action: ReactNode;
}

export const Header = ({ text, action }: HeaderProps) => {
  return (
    <Chakra.HStack h="10vh" w="full" justify="space-between">
      <Chakra.HStack spacing="8" w="full">
        <Chakra.Image src="/logo.svg" alt="Logo" w="96px" />
        {text}
      </Chakra.HStack>
      {action}
    </Chakra.HStack>
  );
};
