import NextAuth, { NextAuthOptions } from 'next-auth';
import { NextApiHandler } from 'next'; 
import CredentialsProvider from 'next-auth/providers/credentials';

const nextAuthOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				username: {
					label: 'username',
					type: 'text',
				},
				email: {
					label: 'email',
					type: 'text',
				},
				password: {
					label: 'password',
					type: 'password',
				},
			},

			async authorize(credentials) {
				const response = await fetch('https://reqres.in/api/login', {
					method: 'POST',
					headers: { 'Content-type': 'application/json' },
					body: JSON.stringify({
						username: credentials?.username,
						email: credentials?.email,
						password: credentials?.password,
					}),
				});
				const user = await response.json();
				if (user && response.ok) {
					return user;
				}

				return null;
			},
		})
	],
    
	pages: {
		signIn: '/',
		error: '/login', 
	},
};

const handler: NextApiHandler = NextAuth(nextAuthOptions);

export default handler; 
