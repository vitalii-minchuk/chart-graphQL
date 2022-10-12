import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  console.log("session", session, status);
  return (
    <div>
      {session?.user ? (
        <button onClick={() => signOut()}>sign out</button>
      ) : (
        <button onClick={() => signIn("google")}>sign in</button>
      )}
      <p>{session?.user?.name}</p>
    </div>
  );
};

export default Home;
