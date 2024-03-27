import Image from 'next/image';
import bgImage from '@/assets/images/login-bg.svg';

export default function LoggedOutLayout({ children }: React.PropsWithChildren): JSX.Element {
	return (
		<main
			className='w-11/12 max-w-7xl rounded border border-white flex absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 overflow-hidden'
		>
			<Image
				src={bgImage.src}
				alt=''
				width={720}
				height={900}
				className='md:block hidden w-1/2 relative'
			/>
			{children}
		</main>
	);
}

