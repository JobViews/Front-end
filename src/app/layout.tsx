import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/global.css'
import { ThemeProvider } from "@/providers/theme-provider"
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobViews",
  description: "Plataforma para gerenciamento de vagas e otimização do seu tempo.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerSession();
  console.log(session)
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
          </NextAuthSessionProvider>
      </body>
    </html>
  );
}
