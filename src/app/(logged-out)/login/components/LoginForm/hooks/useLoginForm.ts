import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type FormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
	email: z.string({
		required_error: 'Email é obrigatório',
		invalid_type_error: 'Email inválido',
	}).email({ message: 'Email inválido' }),
	password: z.string({ required_error: 'Senha é obrigatório' }).min(6, { message: 'Senha precisa ter no mínimo 6 caracteres' }),
});


export function useLoginForm() {
	const router = useRouter();

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	async function onSubmit({ email, password }: FormValues) {
		try {
			const result = await signIn('credentials', {
				username: email,
				email,
				password,
				redirect: false,
			});
			if (result?.error) {
				return new Error('Não foi possível fazer a autenticação');
			}
			router.push('/dashboard');
		} catch (error) {
			return new Error('Não foi possível fazer a autenticação');

		}
	}

	return {
		form,
		onSubmit,
	};
}
