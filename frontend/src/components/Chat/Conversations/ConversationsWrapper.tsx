import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationList from "./ConversationList";

interface IConversationsWrapperProps {
  session: Session;
}

function ConversationsWrapper({ session }: IConversationsWrapperProps) {
  return (
    <Box
      w={{ base: "100%", md: "400px" }}
      bg="whiteAlpha.200"
      p={{ base: 2, md: 4 }}
    >
      <ConversationList session={session} />
    </Box>
  );
}

export default ConversationsWrapper;
