'use client';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';


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
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/components/ui/tabs';

import { useCreateAccountForm } from './hooks/useCreateAccountForm';
import { useState } from 'react';
import Link from 'next/link';

export function CreateAccountForm(): JSX.Element {
	const [activeTab, setActiveTab] = useState<'account' | 'password'>('account');
	const { form, onSubmit } = useCreateAccountForm();
	const {
		name,
		email,
		password,
		confirmPassword, 
	} = form.getValues();

	
	const handleTabStep = async (tab: 'account' | 'password') => {

		if (activeTab === 'account') {
			form.trigger();
			if (!name?.trim() || !email?.trim()) {
				setActiveTab('account');
			} else {
				setActiveTab(tab);
			}
		} else {
			setActiveTab(tab);
		}
	};

	return (
		<div className='w-[400px]'>


			<Tabs value={activeTab} className='w-[400px]'>
				<TabsList className='grid w-full grid-cols-2 bg-transparent text-white'>
					<TabsTrigger value='account' onClick={() => handleTabStep('account')}>Informações</TabsTrigger>
					<TabsTrigger value='password' onClick={() => handleTabStep('password')}>Senha</TabsTrigger>
				</TabsList>
				<TabsContent value='account' className=''>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<Card className='text-white bg-transparent'>
								<CardHeader>
									<CardTitle>Informações</CardTitle>
									<CardDescription className='text-gray-300'>
                                    Preencha as suas informações para criar a sua conta conosco!
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-2'>
									<FormField
										control={form.control}
										name='name'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='name' className='text-white'>Nome Completo</FormLabel>
												<FormControl>
													<Input id='name' {...field} />
												</FormControl>
												<FormMessage>{form.formState.errors?.name?.message}</FormMessage>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='email'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='username' className='text-white'>Email</FormLabel>
												<FormControl>
													<Input id='username' {...field} />
												</FormControl>
												<FormMessage>{form.formState.errors?.email?.message}</FormMessage>
											</FormItem>
										)}
									/>
								</CardContent>
								<CardFooter>
									<Button type='button' disabled={!name?.trim() || !email?.trim()} onClick={() => handleTabStep('password')}>
                                    Prosseguir
									</Button>
								</CardFooter>
							</Card>
						</form>
					</Form>
				</TabsContent>
				<TabsContent value='password'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<Card className='bg-transparent text-white'>
								<CardHeader>
									<CardTitle>Senha</CardTitle>
									<CardDescription className='text-gray-200'>
                                    Preencha sua senha duas vezes com o mesmo valor para garantir que está correta.
									</CardDescription>
								</CardHeader>
								<CardContent className='space-y-2'>
									<FormField
										control={form.control}
										name='password'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='current' className='text-white'>Senha</FormLabel>
												<FormControl>
													<Input id='current' type='password' {...field} />
												</FormControl>
												<FormMessage>{form.formState.errors?.password?.message}</FormMessage>
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name='confirmPassword'
										render={({ field }) => (
											<FormItem>
												<FormLabel htmlFor='new' className='text-white'>Confirme sua senha</FormLabel>
												<FormControl>
													<Input id='new' type='password' {...field} />
												</FormControl>
												<FormMessage>{form.formState.errors?.confirmPassword?.message}</FormMessage>
											</FormItem>
										)}
									/>
								</CardContent>
								<CardFooter>
									<Button type='submit' disabled={!password?.trim() || !confirmPassword?.trim()}>Cadastrar</Button>
								</CardFooter>
							</Card>
						</form>
					</Form>
				</TabsContent>
			</Tabs>
			<p className='text-gray-400 text-xs text-right mt-4'><Link href='/login' className='hover:text-white'>Já possuo conta</Link>.</p>

		</div>
	);
}
