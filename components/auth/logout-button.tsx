'use client'
import { Button } from '../ui/button'
import { signOut } from "next-auth/react";


const Logout_Button = () => {
  return (
    <Button className="bg-[red]" onClick={() => signOut()}>Sign Out</Button>

  )
}

export default Logout_Button