import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import * as Icon from "react-icons/hi";

export interface CardCaseProps {
  id: string;
  title: string;
  description: string;
  amount: string;
  onDelete?: () => void;
  extra?: {
    ngo: string;
    phone: string;
    email: string;
  };
}

export const CardCase = ({
  id,
  title,
  description,
  amount,
  onDelete,
  extra,
}: CardCaseProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOpen = (boolean: boolean): void => {
    setOpen(() => boolean);
  };

  return (
    <Chakra.VStack
      w="full"
      bg="white"
      borderRadius="8"
      border="1px"
      borderColor="gray.300"
      spacing="0"
    >
      <Chakra.VStack w="full" spacing="8" p="8" h="fit-content">
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
        {!!extra && isOpen && (
          <>
            <CardCaseData title="NGO: " description={extra.ngo} />
            <CardCaseData title="Email: " description={extra.email} />
            <CardCaseData title="Phone: " description={extra.phone} />
            <Chakra.HStack
              justify="space-between"
              w="full"
              spacing="8"
              onClick={() => handleOpen(false)}
              color="red.500"
              cursor="pointer"
            >
              <Chakra.Text>See Less Details</Chakra.Text>
              <Chakra.Icon as={Icon.HiChevronUp} />
            </Chakra.HStack>
          </>
        )}
        {!!extra && !isOpen && (
          <>
            <Chakra.HStack
              justify="space-between"
              w="full"
              spacing="8"
              onClick={() => handleOpen(true)}
              color="red.500"
              cursor="pointer"
            >
              <Chakra.Text>See More Details</Chakra.Text>
              <Chakra.Icon as={Icon.HiChevronDown} />
            </Chakra.HStack>
          </>
        )}
      </Chakra.VStack>
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
