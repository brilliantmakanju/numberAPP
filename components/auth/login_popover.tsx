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
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    {/* <DialogTitle>Share link</DialogTitle> */}
                    {/* <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription> */}
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