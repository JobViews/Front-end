'use client';

import { useLoginForm } from './hooks/useLoginForm';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function LoginForm(): JSX.Element {
	const { form, onSubmit } = useLoginForm();

	return (
		<Form {...form}>
			<form
				className='flex flex-col gap-4 w-full max-w-96'
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel className=''>Email</FormLabel>
							<FormControl>
								<Input placeholder='Digite seu email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)
					}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input placeholder='Digite sua senha' type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type='submit'>Entrar</Button>
				<p className='text-gray-400 text-xs text-right'>Ainda não tem conta? <Link href='#' className='hover:text-white'>Registre-se aqui</Link>.</p>
			</form>
		</Form>
	);
}

