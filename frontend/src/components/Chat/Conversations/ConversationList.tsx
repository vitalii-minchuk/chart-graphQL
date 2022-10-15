import { Box, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useState } from "react";
import ConversationModal from "./ConversationModal";

interface IConversationsListProps {
  session: Session;
}

function ConversationList({ session }: IConversationsListProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  return (
    <Box w="full">
      <Box
        py={2}
        px={{ base: 2, md: 4 }}
        mb={4}
        bg="#1A202C"
        borderRadius={4}
        cursor="pointer"
        onClick={onOpen}
      >
        <Text color="whiteAlpha.800" fontWeight="semibold" textAlign="center">
          Find or start a conversation
        </Text>
      </Box>
      <ConversationModal onClose={onClose} open={isOpen} />
    </Box>
  );
}

export default ConversationList;
