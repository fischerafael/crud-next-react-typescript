import { PageTemplate } from "@/src/components/PageTemplate";
import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import { Header } from "@/src/components/Header";
import { ButtonLink } from "@/src/components/ButtonLink";
import { CardCase, CardCaseProps } from "@/src/components/CardCase";

const cases: CardCaseProps[] = [
  {
    amount: "R$ 100.00",
    description:
      "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
    id: "fhausdhfas",
    title: "Case 1",
  },
  {
    amount: "R$ 100.00",
    description:
      "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
    id: "asdfasfdasdf",
    title: "Case 1",
  },
  {
    amount: "R$ 100.00",
    description:
      "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
    id: "asd",
    title: "Case 1",
  },
  {
    amount: "R$ 100.00",
    description:
      "A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.",
    id: "qwerqwer",
    title: "Case 1",
  },
];

export const PageCases = () => {
  return (
    <PageTemplate>
      <Chakra.VStack w="full" spacing="8" align="center" pb="16">
        <Header
          text={
            <Chakra.Text>
              Total of{" "}
              <Chakra.Text as="span" fontWeight="bold">
                40 cases
              </Chakra.Text>
            </Chakra.Text>
          }
          action={
            <Chakra.HStack spacing="4">
              <ButtonLink href="/">Back to Home</ButtonLink>
            </Chakra.HStack>
          }
        />

        <Chakra.HStack w="full" justify="flex-start">
          <Chakra.Text fontWeight="bold" fontSize="2xl">
            Existing Cases
          </Chakra.Text>
        </Chakra.HStack>

        <Chakra.SimpleGrid w="full" gap="8" columns={[1, 1, 2]}>
          {cases.map((item) => (
            <CardCase
              key={item.id}
              {...item}
              extra={{
                email: "test@gmail.com",
                ngo: "Google",
                phone: "5622 ",
              }}
            />
          ))}
        </Chakra.SimpleGrid>
      </Chakra.VStack>
    </PageTemplate>
  );
};
