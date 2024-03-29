import { LoginForm } from './components/LoginForm';

function LoginPage() {
	return (
		<section
			className='w-full text-white p-8 flex flex-col gap-4  justify-center items-center'
		>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='font-bold text-2xl'>Login</h1>
				<p className='text-sm'>Otimize seu tempo conosco.</p>
			</div>
			<LoginForm />
		</section>
	);
}

export default LoginPage;
