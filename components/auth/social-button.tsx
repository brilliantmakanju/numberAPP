"use client"

import React from 'react'
import { signIn } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Social_Login = () => {

    const OnClick = (provider: "google" | "twitter" | "linkedin" | "github" ) => {
        signIn(provider, {
            redirect: false
        })
    }

    return (
        <Card className="w-[400px] p-[30px] flex flex-col justify-center items-center gap-[10px] ">
            <Button onClick={() => OnClick("google")} size={"lg"} className="w-full">
                Login with Google
            </Button>
            <Button onClick={() => OnClick("github")} size={"lg"} className="w-full">
                Login with Github
            </Button>
        </Card>
    )
}

export default Social_Login