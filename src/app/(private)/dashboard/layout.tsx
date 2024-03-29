import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/global.css';

const inter = Inter({ subsets: ['latin'] });
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';

export const metadata: Metadata = {
	title: 'Chronos',
	description: 'Plataforma para gerenciamento de vagas e otimização do seu tempo.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const session = await getServerSession(nextAuthOptions);

	if (!session) {
		redirect('/login');
	}

	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
