import React from 'react';
import { CreateAccountForm } from './components/CreateAccout';

function CreateAccount() {
	return (
		<section
			className='w-full text-white p-8 flex flex-col gap-4 justify-center items-center'
		>
			<CreateAccountForm />
		</section>
	);
}

export default CreateAccount;