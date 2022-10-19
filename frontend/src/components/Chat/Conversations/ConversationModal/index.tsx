import { FormEvent, useState } from "react";
import { useLazyQuery, useMutation } from "@apollo/client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import UserOperations from "../../../../graphql/operations/user";
import ConversationOperations from "../../../../graphql/operations/conversation";
import {
  CreateConversationData,
  CreateConversationInput,
  SearchedUser,
  SearchUsersData,
  SearchUsersInput,
} from "../../../../util/types";
import Participants from "./Participants";
import UserSearchList from "./UserSearchList";
import { Session } from "next-auth";
import { useRouter } from "next/router";

interface IConversationModalProps {
  session: Session;
  open: boolean;
  onClose: () => void;
}

function ConversationModal({
  open,
  onClose,
  session,
}: IConversationModalProps) {
  const {
    user: { id: userId },
  } = session;
  const [username, setUsername] = useState("");
  const [participants, setParticipants] = useState<SearchedUser[]>([]);
  const [searchUsers, { data, loading: searchUsersLoading }] = useLazyQuery<
    SearchUsersData,
    SearchUsersInput
  >(UserOperations.Query.searchUsers);
  const [createConversation, { loading: createConversationLoading }] =
    useMutation<CreateConversationData, CreateConversationInput>(
      ConversationOperations.Mutations.createConversation
    );
  const router = useRouter();

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    searchUsers({ variables: { username } });
    setUsername("");
  };

  const addParticipant = (user: SearchedUser) => {
    setParticipants((prev) => [...prev, user]);
  };

  const removeParticipant = (userId: string) => {
    setParticipants((prev) => prev.filter((el) => el.id !== userId));
  };

  const onCreateConversation = async () => {
    const participantIds = [userId, ...participants.map((el) => el.id)];
    try {
      const { data } = await createConversation({
        variables: { participantIds },
      });

      if (!data?.createConversation) {
        throw new Error("Failed to create conversation");
      }

      const {
        createConversation: { conversationId },
      } = data;

      router.push({ query: { conversationId } });
      setParticipants([]);
      setUsername("");
      onClose();
    } catch (error: any) {
      console.log("onCreateConversation error", error?.massage);
      toast.error(error?.message);
    }
  };
  return (
    <>
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent pb={4} bg="#1A202C">
          <ModalHeader>Create a conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSearch}>
              <Stack spacing={4}>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username ..."
                />
                <Button
                  isLoading={searchUsersLoading}
                  type="submit"
                  disabled={!username.trim()}
                >
                  search
                </Button>
              </Stack>
            </form>
            {data?.searchUsers && (
              <UserSearchList
                addParticipant={addParticipant}
                users={data?.searchUsers}
              />
            )}
            {!!participants.length && (
              <>
                <Participants
                  participants={participants}
                  removeParticipant={removeParticipant}
                />
                <Button
                  isLoading={createConversationLoading}
                  onClick={onCreateConversation}
                  mt={6}
                  w="full"
                >
                  create conversation
                </Button>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConversationModal;
