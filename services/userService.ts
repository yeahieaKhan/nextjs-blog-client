import { cookies } from "next/headers";

export const UserService = {
  getSession: async function () {
    try {
      const cookieStored = await cookies();
      console.log(cookieStored.toString());

      const res = await fetch("http://localhost:5000/api/auth/get-session", {
        headers: {
          cookie: cookieStored.toString(),
        },
        cache: "no-store",
      });
      const session = await res.json();
      if (session === null) {
        return { data: null, error: { message: "Session data missing" } };
      }
      console.log(session);
      return { data: session, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};
