import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/global.css';
import NextAuthSessionProvider from '@/providers/sessionProvider';
import { ThemeProvider } from '@/providers/themeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Chronos',
	description: 'Plataforma para gerenciamento de vagas e otimização do seu tempo.',
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<NextAuthSessionProvider>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
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
