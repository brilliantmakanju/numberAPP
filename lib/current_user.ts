'use server'

import { auth } from "@/auth"

export const currentUser = async () => {
    const _token = await auth()

    console.log(`Current user`, _token)

    return _token?.user
}

