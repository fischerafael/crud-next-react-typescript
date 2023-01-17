import { Button } from "@/src/components/Button";
import { Header } from "@/src/components/Header";
import { PageTemplate } from "@/src/components/PageTemplate";
import * as Chakra from "@chakra-ui/react";
import * as Icon from "react-icons/hi";
import React from "react";
import { ButtonLink } from "@/src/components/ButtonLink";

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

export const PageApp = () => {
  return (
    <PageTemplate>
      <Chakra.VStack w="full" spacing="8" align="center" pb="16">
        <Header
          text={
            <Chakra.Text>
              Welcome,{" "}
              <Chakra.Text as="span" fontWeight="bold">
                fischerafael
              </Chakra.Text>
            </Chakra.Text>
          }
          action={
            <Chakra.HStack spacing="4">
              <ButtonLink href="/app/new">Create New</ButtonLink>
              <Chakra.IconButton
                aria-label="LogOut"
                colorScheme="red"
                h="12"
                w="12"
                variant="outline"
                icon={<Icon.HiOutlineLogin />}
              />
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
              onDelete={() => alert(`deleted on ${item.id}`)}
              key={item.id}
              {...item}
            />
          ))}
        </Chakra.SimpleGrid>
      </Chakra.VStack>
    </PageTemplate>
  );
};

export interface CardCaseProps {
  id: string;
  title: string;
  description: string;
  amount: string;
  onDelete?: () => void;
}

export const CardCase = ({
  id,
  title,
  description,
  amount,
  onDelete,
}: CardCaseProps) => {
  return (
    <Chakra.VStack
      w="full"
      bg="white"
      p="8"
      borderRadius="8"
      border="1px"
      borderColor="gray.300"
      spacing="8"
    >
      <Chakra.HStack w="full" align="flex-start">
        <CardCaseData title="Case: " description={title} />
        {onDelete ? (
          <Chakra.VStack>
            <Chakra.IconButton
              onClick={onDelete}
              aria-label="Delete"
              colorScheme="red"
              color="gray.500"
              variant="ghost"
              icon={<Icon.HiOutlineTrash />}
              _hover={{
                color: "red.500",
              }}
            />
          </Chakra.VStack>
        ) : null}
      </Chakra.HStack>
      <CardCaseData title="Description: " description={description} />
      <CardCaseData title="Amount: " description={amount} />
    </Chakra.VStack>
  );
};

interface CardCaseDataProps {
  title: string;
  description: string;
}

export const CardCaseData = ({ title, description }: CardCaseDataProps) => {
  return (
    <Chakra.VStack w="full" align="flex-start" spacing="2">
      <Chakra.Text fontSize="xs" fontWeight="bold">
        {title.toUpperCase()}
      </Chakra.Text>
      <Chakra.Text color="gray.500">{description}</Chakra.Text>
    </Chakra.VStack>
  );
};
