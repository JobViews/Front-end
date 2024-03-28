import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/global.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Chronos',
	description: 'Plataforma para gerenciamento de vagas e otimização do seu tempo.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}