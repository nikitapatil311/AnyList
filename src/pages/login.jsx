import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

const login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <p>Welcome, {session.user.name}</p>
        <Image src={session.user.image} alt="" height={100} width={100} />
        <div>
          Signed in as {session.user.email} <br />
        </div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default login;
