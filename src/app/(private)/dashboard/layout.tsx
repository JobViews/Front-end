import type { Metadata } from 'next';
import '@/app/global.css';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import Header from '@/components/Header';

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
			<body className={'flex flex-col items-center mx-auto justify-center bg-black w-full h-full '}>
				<Header/>
				<div className='flex flex-grow justify-center items-center w-full'>
					{children}
				</div>
			</body>
		</html>
	);
}
