import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Center, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";
import UserOperations from "../../graphql/operations/user";
import { CreateUsernameData, CreateUsernameVariables } from "../../util/types";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

function Auth({ session, reloadSession }: IAuthProps) {
  const [username, setUsername] = useState("");
  const [createUsername, { loading, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariables
  >(UserOperations.Mutation.createUsername);
  console.log(error);
  const handleSave = async () => {
    if (!username.trim()) return;
    try {
      const { data } = await createUsername({ variables: { username } });

      if (!data?.createUsername) {
        throw new Error();
      }

      if (data.createUsername.error) {
        const {
          createUsername: { error },
        } = data;
        throw new Error(error);
      }

      reloadSession();
    } catch (error) {
      console.log("handleSave error", error);
    }
  };

  return (
    <Center h="100vh" w="full">
      <Stack w={{ base: "250px", md: "340px" }} align="center" spacing={8}>
        {session ? (
          <>
            <Text fontSize="20px">Create Username</Text>
            <Input
              placeholder="Enter username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
            <Button w="full" onClick={handleSave}>
              save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="20px" letterSpacing="8px">
              ChatQL
            </Text>
            <Button
              leftIcon={
                <Image
                  width="20px"
                  height="20px"
                  src="/images/googlelogo.png"
                  alt="google logo"
                />
              }
              w="full"
              textTransform="capitalize"
              onClick={() => signIn("google")}
            >
              sign in with google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
}

export default Auth;
