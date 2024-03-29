import NextAuth, { NextAuthOptions } from 'next-auth';
import {
	NextApiHandler, NextApiRequest, NextApiResponse
} from 'next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const nextAuthOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
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
			// @ts-ignore
			authorize: async (credentials) => {
				const response = await fetch('https://reqres.in/api/login', {
					method: 'POST',
					headers: { 'Content-type': 'application/json' },
					body: JSON.stringify({
						username: credentials?.username,
						email: credentials?.email,
						password: credentials?.password,
					}),
				});


				if (response.ok) {
					const data = await response.json();
					const token = data.token;
					return {
						token,
						email: credentials?.email,
					};
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

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	return NextAuth(req, res, nextAuthOptions);
}
export async function POST(req: NextApiRequest, res: NextApiResponse) {
	return NextAuth(req, res, nextAuthOptions);
}

const handler: NextApiHandler = NextAuth(nextAuthOptions);

export default handler; 
