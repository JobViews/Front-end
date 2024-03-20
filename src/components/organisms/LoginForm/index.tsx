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
    email: z.string().email("Digite um e-mail válido"),
    password: z.string().min(2, "Precisa ter no mínimo 2 caracteres")
})

export default function LoginForm() {

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
                    <h1 className="text-2xl font-serif text-black dark:text-slate-100">Bem-vindo!</h1>
                    <span className="text-black dark:text-slate-200">Otimize seu tempo com a nossa plataforma</span>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-auto items-center">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <InputWithLabel id="email" type="email" label="Email" placeholder="Digite o seu email" {...field} />
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
                        <Button variant='default' type="submit" className="w-96">Entrar</Button>
                        <Link href="/create">
                            <Button variant='outline' type="button" className="w-96">Criar conta</Button>
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
