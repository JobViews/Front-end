import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';

export default function Dashboard():JSX.Element {

	return (
		<main className='flex overflow-hidden  flex-col gap-10 w-full items-center h-screen mx-auto text-white pt-32 bg-gradient-to-br from-[#5a2354d5] via-[#c93ac426] to-[#200a1f26] '>
			<section>
				<h1 className='text-3xl text-center'>Bem-vindo de volta, <br></br> João Kremer.</h1>
			</section>
			<section
				className='flex flex-col justify-center 
				w-full h-full
				px-20 py-12
				border bg-gradient-to-br rounded-t-[250px] border-l-0 border-gray-500 custom-border-radius
				from-[#180718ce] via-[#000000d7] to-[#180016]
				-z-50 '
			>

				<div
					className='flex flex-col gap-10
					max-w-[1000px] w-full h-80 
					text-white
					mx-auto '>
					<div className='flex justify-between'>
						<Button variant='secondary' >Ordem</Button>
						<Button variant='secondary'>Adicionar</Button>
					</div>

					<div className='flex flex-wrap justify-between gap-3 '>
						<JobCard />
						<JobCard />
						<JobCard />
						<JobCard />
						<JobCard />
						<JobCard />
					</div>
				</div>
			</section>
		</main>
	);
}


