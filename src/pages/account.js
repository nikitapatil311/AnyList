// import React from "react";
// import { useSession, signOut, getSession } from "next-auth/react";

//  const Account = () => {
//   const { data: session, status } = useSession({ required: true });
//   if (status === "authenticated") {
//     return (
//       <div>
//         <p>Welcome {session.user.name}</p>
//         <button onClick={() => signOut()}>Sign out</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <p>You are not Signed in</p>
//       </div>
//     );
//   }
// };

// export const getServerSideProps = async (context) => {
//   const session = await getSession(context);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// };

// export default Account;
