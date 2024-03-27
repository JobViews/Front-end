import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function useLoginForm() {
	const formSchema = z.object({
		email: z.string({
			required_error: 'Email é obrigatório',
			invalid_type_error: 'Email inválido',
		}).email({ message: 'Email inválido' }),
		password: z.string({ required_error: 'Senha é obrigatório' }).min(6, { message: 'Senha precisa ter no mínimo 6 caracteres' }),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	// TODO: Submit login form
	// const onSubmit = (values: z.infer<typeof formSchema>) => {
	// };

	return {
		form,
		onSubmit: () => {},
	};
}

