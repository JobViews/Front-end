import NextAuth, { NextAuthOptions, User } from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials'

console.log(process.env.NEXTAUTH_SECRET)
const nextAuthOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
      },
      secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: {label: 'password', type: 'password'}
            },

            async authorize(credentials, req) {

                const response = await fetch('https://reqres.in/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    })
                })
                
                const user = await response.json();
                console.log(user);
                
                if (user && response.ok) {
                    return user
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/'
    },
    callbacks: {
        async jwt({token, user}) {
            user && (token.user = user)
            return token
        },
        async session({ session, token }) {
            console.log(token.user)
            session = token.user as any
            return session
        }
    }
}



const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }