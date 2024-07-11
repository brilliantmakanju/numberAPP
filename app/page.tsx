'use client'
import { auth } from "@/auth";
import Login_Popover from "@/components/auth/login_popover";
import Logout_Button from "@/components/auth/logout-button";
import Social_Login from "@/components/auth/social-button";
import { currentUser } from "@/lib/current_user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import post from "@/lib/axios/post";
// import { extractCookies } from "@/lib/extractCookie";
// import { generateTokens } from "@/server/generateToken";
// import { useEffect } from "react";

export default function Home() {

  const router = useRouter()

  const redirectTo = async () => {
    const session = await currentUser()
    if (session) {
      router.push('dashboard')
    }
    // router.push('dashboard')
  }

  // useEffect(() => {
  //   redirectTo()
  // }, [])


  return (
    <main className="w-[500px] p-[30px] h-screen flex justify-start items-start flex-col">
      <Login_Popover actionName="Login">
        <Social_Login />
      </Login_Popover>
    </main>
  );
}




