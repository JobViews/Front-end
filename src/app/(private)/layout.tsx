import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Dashboard',
  description: 'Gerencie e otimize o seu tempo!',
}

interface PrivateLayoutProps {
  children: ReactNode
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession();
  console.log(session)  

  if(!session) {
    redirect('/')
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
