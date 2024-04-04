'use client';
import Image from 'next/image';
import logo from '@/assets/images/logo_black.svg';
import { MenuNavigation } from '../MenuNavigation';

import AvatarMenu from '../AvatarMenu';

export default function Header(): JSX.Element {

	return (
		<div className='w-full px-20 max-w-[1200px] flex justify-between items-center py-6 fixed top-0'>
			<Image
				src={logo}
				alt=''
				width={100}
				height={100}
				className='object-cover'
			/>

			<MenuNavigation />

			<AvatarMenu />
		</div>
	);
}
