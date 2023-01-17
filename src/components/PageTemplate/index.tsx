import * as Chakra from "@chakra-ui/react";

interface PageTemplateProps {
  children: React.ReactElement;
}

export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <Chakra.Grid
      w="full"
      bg="gray.100"
      minH="100vh"
      justifyItems="center"
      alignContent="flex-start"
      color="gray.700"
    >
      <Chakra.Grid w="full" maxW="container.lg">
        {children}
      </Chakra.Grid>
    </Chakra.Grid>
  );
};
