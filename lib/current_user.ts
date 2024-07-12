'use server'

import { auth } from "@/auth"

export const currentUser = async () => {
    const _token = await auth()


    return _token?.user
}

