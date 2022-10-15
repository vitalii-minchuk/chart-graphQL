import { Avatar, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { SearchedUser } from "../../../../util/types";

type IUserSearchListProps = {
  users: Array<SearchedUser>;
  addParticipant: (user: SearchedUser) => void;
};

function UserSearchList({ users, addParticipant }: IUserSearchListProps) {
  return (
    <>
      {users.length === 0 ? (
        <Flex mt={6} justify="center">
          <Text>No users found</Text>
        </Flex>
      ) : (
        <Stack my={6}>
          {users.map((user) => (
            <Flex
              key={user.id}
              borderRadius={4}
              px={4}
              align="center"
              gap="15px"
              py={2}
              transition="all .3s"
              _hover={{
                bg: "#2D3748",
              }}
            >
              <Avatar size="sm" src={user.image} />
              <Flex color="whiteAlpha.700" justify="space-between" w="full">
                <Text>{user.username}</Text>
                <Text
                  onClick={() => addParticipant(user)}
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  select
                </Text>
              </Flex>
            </Flex>
          ))}
        </Stack>
      )}
    </>
  );
}

export default UserSearchList;
