import Image from 'next/image';
import bgImage from '@/assets/images/login-bg.svg';
import logo from '@/assets/images/logo_black.png';

export default function LoggedOutLayout({ children }: React.PropsWithChildren): JSX.Element {
	return (
		<main
			className='w-full h-screen bg-black rounded flex overflow-hidden relative '
		>
			<Image
				src={bgImage.src}
				alt=''
				width={720}
				height={900}
				className='md:block hidden w-full object-cover'
			/>
			<Image
				src={logo.src}
				alt=''
				width={200}
				height={200}
				className='md:block hidden w-32 right-10 top-10 object-cover absolute'
			/>
			{children}
		</main>
	);
}

