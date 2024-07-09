"use client"
interface LoginButtonProps {
    mode?: "modal";
    asChild?: boolean;
    children: React.ReactNode;
}


export const LoginButton = ({children, asChild, mode="modal"}: LoginButtonProps) => {

    return(
        <span  className="cursor-pointer w-full">{children}</span>
    )
}