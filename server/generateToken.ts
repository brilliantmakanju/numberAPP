"use server"

import { Client } from "@/lib/client"
import axios from "axios"



export async function generateTokens({ access_tokens }: User_Token) {
    // console.log("Access token generated", access_tokens, '\n')

    // const datas = await axios.post(`localhost:8080/authentication/google/`, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         "access_token": access_tokens,
    //     })
    // })

    // const data = {
    //     access_token: access_tokens,
    // }

    // const response = await fetch(`http://127.0.0.1:8080/authentication/google/`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         "access_token": access_tokens,

    //     }),
    // });
    // const result = await response.json();
    // console.log(result)

    const data = await Client({
        path: "authentication/oauthlogin/",
        method: "POST",
        data: {
            "provider": "google",
            "access_token": access_tokens,
        },
        contentType: "application/json",
    })
    // console.log(data)
    // return data
}


