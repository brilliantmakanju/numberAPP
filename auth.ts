import NextAuth from "next-auth"
import post from "@/lib/axios/post"
import authConfig from "@/auth.config"
import { cookies } from 'next/headers';
import { setCookie } from "cookies-next"
import { extractCookies } from "@/lib/extractCookie"



export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async session({ session, token, user }) {
      if (session) {
        session.user.access_all = token.access_all
        session.user.access_token = token.access_token
        session.user.refresh_token = token.refresh_token
      }
      return session
    },
    async jwt({ token, account, user }) {
      if (account) {
        const tokens = Object.assign({}, token, { access_all: account });
        token.access_all = tokens.access_all
        token.access_token = account.access_token
      }


      if (account?.access_token) {
        const info = {
          "provider": account.provider,
          "access_token": account.access_token
        }

        // const data = await post({
        //   data: info,
        //   method: "POST",
        //   contentType: "application/json",
        //   path: 'authentication/oauthlogin/',
        // })

        // const setCookieHeader = data.headers.get('set-cookie');
        // const cookie = extractCookies(setCookieHeader, ['newAdd']);

        // const response = await data.json()
        // // console.log(response.access)

        // // console.log((await cookies))

        // // console.log()
        // token.access_token = response.access
        // token.refresh_token = (await cookie).get("newAdd")

      }
      return token
    }
  },
  session: { strategy: "jwt" },
  ...authConfig
})                    