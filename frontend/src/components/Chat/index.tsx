import { Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationsWrapper from "./Conversations/ConversationsWrapper";
import FeedWrapper from "./Feed/FeedWrapper";

interface IChatProps {
  session: Session;
}

function Chart({ session }: IChatProps) {
  return (
    <Flex h="100vh" border="1px solid red">
      <ConversationsWrapper session={session} />
      <FeedWrapper session={session} />
    </Flex>
  );
}

export default Chart;
