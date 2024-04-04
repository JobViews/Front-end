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
import { ReloadIcon } from '@radix-ui/react-icons';

import Link from 'next/link';

export function LoginForm(): JSX.Element {
	const {
		form,
		onSubmit,
		isLoading, 
	} = useLoginForm();

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
							<FormLabel>Email</FormLabel>
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
				<Button type='submit'>	
					{isLoading ?
						<ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
						: 'Entrar'}

				</Button>
				<p className='text-white text-xs text-right'><Link href='/create' className='hover:text-white'>Registre-se aqui</Link>.</p>
			</form>
		</Form>
	);
}

