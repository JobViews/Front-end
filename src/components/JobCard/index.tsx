import { Button } from '../ui/button';

export default function JobCard(): JSX.Element {
	return (
		<div
			className='w-80 h-40
            bg-white/30
			flex flex-col gap-2
             border  border-white rounded-md 
             brightness-150
             text-white
             p-4'
		>
			<div className='flex'>
				<div className=''>
					<h1>InfoJob</h1>
				</div>
				<div>

				</div>
			</div>
			<div className='flex justify-between gap-4'>
				<div>
					<p className='text-md'>TechNext Solutions</p>
					<p className='text-sm text-gray-500'>Empresa</p>
				</div>
				<div>
					<p className='text-md'>Front End - Pleno</p>
					<p className='text-sm text-gray-500'>Vaga</p>
				</div>
			</div>
			<div className='flex justify-between gap-4'>
				<div>
					<p className='text-sm'>02/04/2024</p>
					<p className='text-sm text-gray-500'>Empresa</p>
				</div>
				<div>
					<Button variant='secondary' className='bg-white/10 text-white'>Triagem</Button>
				</div>
			</div>
		</div>
	);
}