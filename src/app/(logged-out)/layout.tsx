import Image from 'next/image';
import bgImage from '@/assets/images/login-bg.svg';
import logo from '@/assets/images/Chronos.svg';
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
			className='w-full flex h-screen bg-black rounded  overflow-hidden relative '
		>
			<Image
				src={bgImage.src}
				alt=''
				width={720}
				height={900}
				className='md:block hidden w-full object-cover'
			/>
			<Image
				src={logo}
				alt=''
				width={200}
				height={200}
				className='md:block hidden w-32 right-10 top-10 object-cover absolute'
			/>
			{children}
			<Toaster />

		</main>
	);
}

export default LoggedOutLayout;

