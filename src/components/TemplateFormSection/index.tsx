import { ReactNode } from "react";
import * as Chakra from "@chakra-ui/react";

interface TemplateFormSectionProps {
  left: ReactNode;
  right: ReactNode;
}

export const TemplateFormSection = ({
  left,
  right,
}: TemplateFormSectionProps) => {
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
          {left}
        </Chakra.VStack>

        <Chakra.VStack w="full" as="form" spacing="4">
          {right}
        </Chakra.VStack>
      </Chakra.Grid>
    </Chakra.Grid>
  );
};
