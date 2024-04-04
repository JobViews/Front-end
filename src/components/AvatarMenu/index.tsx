import {
	Avatar,
	AvatarFallback,
	AvatarImage 
} from '@/components/ui/avatar';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
  
export default function AvatarMenu(): JSX.Element {
	const [submenuOpen, setSubmenuOpen] = useState(false);
  
	const toggleSubmenu = () => {
		setSubmenuOpen(!submenuOpen);
	};
  
	const router = useRouter();
  
	async function logout() {
		await signOut({ redirect: false });
		router.replace('/login');
	}
  
	return (
		<div className='relative'>
			<Avatar className='cursor-pointer' onClick={toggleSubmenu}>
				<div>
					<AvatarImage src='https://github.com/shadcn.png' />
					<AvatarFallback>CN</AvatarFallback>
				</div>
			</Avatar>
  
			{submenuOpen && (
				<div className='absolute top-12 right-0 bg-white w-32 h-32'>
					<Button onClick={logout}>Sair</Button>
				</div>
			)}
		</div>
	);
}
  