import NextAuth, { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** Oauth access token */
      access_all?: any;
      refresh_token: any;
      access_token: any;
    } & DefaultSession["user"];
  }

  // interface JWT {
  //   token: {
  //     access_token: any
  //   } & DefaultJWT["sub"]
  // }
}