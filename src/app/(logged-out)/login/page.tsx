import { LoginForm } from './components/LoginForm';

export default function LoginPage(): JSX.Element {
	return (
		<section
			className='md:w-1/2 w-full p-8 bg-black flex flex-col gap-4 justify-center items-center'
		>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='font-bold text-2xl'>Login</h1>
				<p className='text-sm'>Faça login para começar.</p>
			</div>
			<LoginForm />
		</section>
	);
}

