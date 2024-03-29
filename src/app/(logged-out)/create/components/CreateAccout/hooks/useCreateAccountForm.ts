import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


type FormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
	email: z.string({
		required_error: 'Email é obrigatório',
		invalid_type_error: 'Email inválido',
	}).email({ message: 'Email inválido' }),
	name: z.string({
		required_error: 'Nome é obrigatório',
		invalid_type_error: 'Nome inválido',
	}),
	password: z.string({ required_error: 'Senha é obrigatório' }).min(6, { message: 'Senha precisa ter no mínimo 6 caracteres' }),
	confirmPassword: z.string({ required_error: 'Senha é obrigatório' }).min(6, { message: 'Senha precisa ter no mínimo 6 caracteres' }),
});


export function useCreateAccountForm() {

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit() {

	}

	return {
		form,
		onSubmit,
	};
}
