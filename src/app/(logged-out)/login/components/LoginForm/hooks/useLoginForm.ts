import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';


type FormValues = z.infer<typeof formSchema>;

const formSchema = z.object({
	email: z.string({
		required_error: 'Email é obrigatório',
		invalid_type_error: 'Email inválido',
	}).email({ message: 'Email inválido' }),
	password: z.string({ required_error: 'Senha é obrigatório' }).min(6, { message: 'Senha precisa ter no mínimo 6 caracteres' }),
});


export function useLoginForm() {
	const [isLoading, setIsLoading] = useState(false);

	const { toast } = useToast();

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
			setIsLoading(true);
			const result = await signIn('credentials', {
				username: email,
				email,
				password,
				redirect: false,
			});
			if (result?.error) {
				setIsLoading(false);
				toast({
					title: 'Erro na autenticação',
					description: 'Verifique a veracidade dos dados digitados',
					variant: 'destructive',

				});
				return;
			}
			setIsLoading(false);
			router.replace('/dashboard');
			
		} catch (error) {
			setIsLoading(false);
			return new Error('Não foi possível fazer a autenticação');
		}
	}

	return {
		form,
		onSubmit,
		isLoading,
	};
}
