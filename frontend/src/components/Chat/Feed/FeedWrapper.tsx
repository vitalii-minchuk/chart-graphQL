import { useQuery } from "@apollo/client";
import { Flex, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import ConversationOperations from "../../../graphql/operations/conversation";

interface IFeedWrapperProps {
  session: Session;
}

function FeedWrapper({ session }: IFeedWrapperProps) {
  const router = useRouter();
  const { conversationId } = router.query;
  const {
    data: conversationsData,
    error: conversationsError,
    loading: conversationsLoading,
  } = useQuery<>(ConversationOperations.Queries.conversations);
  console.log(conversationsData);
  return (
    <Flex
      display={{ base: conversationId ? "flex" : "none", md: "flex" }}
      direction="column"
      w="full"
    >
      {conversationId ? (
        <Flex>{conversationId}</Flex>
      ) : (
        <Text>No conversation</Text>
      )}
    </Flex>
  );
}

export default FeedWrapper;
