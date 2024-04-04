import Image from 'next/image';
import bgImage from '@/assets/images/Chronos_logo_white.svg';
import { getServerSession } from 'next-auth';
import { nextAuthOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';


async function LoggedOutLayout({ children }: React.PropsWithChildren) {
	const session = await getServerSession(nextAuthOptions);

	if (session) {
		redirect('/dashboard');
	}

	return (
		<main
			className='w-full flex h-screen bg-gradient-to-br from-[#0c060cdc] via-[#791d76de] to-[#1b0d1b26] rounded  overflow-hidden relative '
		>
			<div className='w-full flex justify-center items-center'>
				<Image
					src={bgImage.src}
					alt=''
					width={100}
					height={100}
					className='md:block hidden w-72 object-cover bg-center'
				/>
			</div>
		
			{children}
			<Toaster />

		</main>
	);
}

export default LoggedOutLayout;

