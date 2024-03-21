'use client'
import { InputWithLabel } from "@/components/atoms/atomsInputWithLabel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from 'framer-motion'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useAnimationConfig } from '@/animations/topDown';

const formSchema = z.object({
    name: z.string().min(3, "Mínimo de 3 caracteres"),
    lastName: z.string().min(3, "Mínimo de 3 caracteres"),
    email: z.string().email("Digite um e-mail válido"),
    password: z.string()
        .min(6, "A senha precisa ter no mínimo 6 caracteres")
        .regex(/[A-Z]/, "A senha precisa ter pelo menos 1 letra maiúscula")
        .regex(/[!@#$%^&*(),.?":{}|<>]/, "A senha precisa ter pelo menos 1 símbolo especial"),
})

export default function CreateAccount() {

    const topDown = useAnimationConfig();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <motion.div
            initial={topDown.initial}
            animate={topDown.animate}
            transition={topDown.transition}
            className="flex text-black items-center justify-center w-full dark:text-white overflow-hidden" >
            <div className="flex flex-col items-center px-8 justify-center gap-4 ">
                <div className="flex flex-col gap-2 text-center text-slate-200">
                    <h1 className="text-2xl font-serif text-black dark:text-slate-100">Crie sua conta!</h1>
                    <span className="text-black dark:text-slate-200">Rápido, simples e eficaz.</span>

                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-auto items-center">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <InputWithLabel id="Nome" type="text" label="Nome" placeholder="Digite o seu nome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <InputWithLabel id="lastName" type="text" label="Sobrenome" placeholder="Digite o seu sobrenome" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <InputWithLabel id="email" type="email" label="Email" placeholder="Digite o seu melhor email" {...field} />
                                    </FormControl>
                                    <FormMessage className="" />
                                </FormItem>

                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <InputWithLabel id="password" type="password" label="Senha" placeholder="Digite sua senha" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        <Button variant='default' type="submit" className="w-96">Cadastrar</Button>
                        <Link href="/" className="text-black dark:text-slate-200 hover:text-blue-300 cursor-pointer text-xs">
                            <Button variant='secondary' type="submit" className="w-96">Já possuo conta</Button>
                        </Link>
                    </form>
                </Form>
                <div className="w-full text-end">
                    <Link href="/recover" className="text-black dark:text-slate-200 hover:text-blue-300 cursor-pointer text-xs">
                        Recuperar senha
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
