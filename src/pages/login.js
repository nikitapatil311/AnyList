import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/legacy/image";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <>
        <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto mt-8">
          <p className="text-xl font-semibold mb-2">
            Welcome, {session.user.name}
          </p>
          <Image
            src={session.user.image}
            alt=""
            height={100}
            width={100}
            className="rounded-full"
          />
          <div className="mt-4">
            Signed in as {session.user.email} <br />
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="p-4 border border-gray-300 rounded-md shadow-md max-w-md mx-auto mt-8">
        <p className="text-xl font-semibold mb-2">
          Sign in to add items and continue shopping 🛒
        </p>

        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>

      <div className="flex justify-center items-center mt-5 mb-5 rounded-md">
        <Image
          src="https://i.gifer.com/RTN.gif"
          alt=""
          height={400}
          width={400}
          className="rounded-md"
        />
      </div>
    </>
  );
};

export default Login;
