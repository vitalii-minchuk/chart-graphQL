import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { SearchedUser } from "../../../../util/types";

type IParticipantsProps = {
  removeParticipant: (userID: string) => void;
  participants: SearchedUser[];
};

function Participants({ removeParticipant, participants }: IParticipantsProps) {
  return (
    <Flex gap="10px" flexWrap="wrap">
      {participants.map((participant) => (
        <Flex
          key={participant.id}
          align="center"
          bg="#2D3748"
          gap="10px"
          borderRadius={4}
          p={2}
          color="whiteAlpha.700"
        >
          <Text>{participant.username}</Text>
          <AiOutlineCloseCircle
            size={20}
            cursor="pointer"
            onClick={() => removeParticipant(participant.id)}
          />
        </Flex>
      ))}
    </Flex>
  );
}

export default Participants;
