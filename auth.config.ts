import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import Github from "next-auth/providers/github"
// import Linkedin from "next-auth/providers/linkedin"



export default {
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET
        }),
        Github({
            clientId: process.env.AUTH_GITHUB_CLIENT_ID,
            clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
        }),
        // Linkedin({
        //     clientId: process.env.AUTH_LINKEDIN_CLIENT_ID,
        //     clientSecret: process.env.AUTH_LINKEDIN_CLIENT_SECRET
        // })
    ]
} satisfies NextAuthConfig