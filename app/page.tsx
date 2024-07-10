// 'use client'
import { auth } from "@/auth";
import Login_Popover from "@/components/auth/login_popover";
import Logout_Button from "@/components/auth/logout-button";
import Social_Login from "@/components/auth/social-button";
import get from "@/lib/axios/get";
// import post from "@/lib/axios/post";
// import { extractCookies } from "@/lib/extractCookie";
// import { generateTokens } from "@/server/generateToken";
// import { useEffect } from "react";

export default async function Home() {

  const session = await auth()
  const user_details = [session?.user.access_all]
  // console.log(session?.user.access_all);



  // async function getToken() {

  //   if (session) {
  //     const data = await get({
  //       method: "GET",
  //       contentType: "application/json",
  //       path: 'authentication/oauthlogin/',
  //     })

  //     const infos = await data.json()

  //     console.log(infos)

  //     // const setCookieHeader = data.headers.get('set-cookie');
  //     // const cookies = extractCookies(setCookieHeader, ['newAdd', 'rongtai']);

  //   }
  // }

  // getToken()

  return (
    <main className="w-[500px] p-[30px] h-screen flex justify-start items-start flex-col">
      {session?.user ? <div className="w-[500px] flex flex-col justify-start items-start gap-[10px]">
        {/* {} */}

        <br />
        <br />
        <div className="flex flex-col justify-start items-start gap-[10px] w-[500px]">

          Name: {session?.user.name} <br />
          Email: {session?.user.email} <br />
          <span className=" h-[300px] overflow-hidden overflow-y-scroll w-full break-words">
            Access Token: {session?.user.access_token} <br />
          </span>
          <span className=" h-[300px] overflow-hidden overflow-y-scroll w-full break-words">
            Refresh Token: {session?.user.refresh_token} <br />
          </span>
        </div>
        <Logout_Button />
      </div>
        :
        <div className="flex flex-col justify-start items-start gap-[10px]">
          <Login_Popover actionName="Login">
            <Social_Login />
          </Login_Popover>
        </div>
      }
    </main>
  );
}




