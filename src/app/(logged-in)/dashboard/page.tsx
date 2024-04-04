'use client';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
	const router = useRouter();

	async function logout() {
		await signOut({ redirect: false });
		router.replace('/login');
	}
	return (
		<main>
			<h1 className='text-black'>Dashboard</h1>
			<Button onClick={logout}>Sair</Button>
		</main>
	);
};

export default Dashboard;

