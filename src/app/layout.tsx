import type { Metadata } from 'next';

import '@/app/global.css';
import NextAuthSessionProvider from '@/providers/sessionProvider';

export const metadata: Metadata = {
	title: 'Chronos',
	description: 'Plataforma para gerenciamento de vagas e otimização do seu tempo.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={'bg-black text-white'}>
				<NextAuthSessionProvider>
					{children}
				</NextAuthSessionProvider>
			</body>
		</html>
	);
}
