import { Box, Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

function Chart() {
  return (
    <Box>
      <Button onClick={() => signOut()}>sign out</Button>
    </Box>
  );
}

export default Chart;
