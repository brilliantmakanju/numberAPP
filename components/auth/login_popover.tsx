'use client'
import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const Login_Popover = ({ icon, actionName, children }: Popover) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button>
                    {actionName}
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-[24rem] rounded-[2.4rem] sm:rounded-[2.4rem]  login_popup">
                <DialogHeader>
                    <DialogTitle className='hidden'>Login</DialogTitle>
                    <DialogDescription className='hidden'>
                        User gets authenticated using the specified oauthlogin provider.
                    </DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                            c
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Login_Popover