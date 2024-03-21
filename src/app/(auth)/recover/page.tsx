'use client'
import { InputWithLabel } from '@/components/atoms/atomsInputWithLabel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useAnimationConfig } from '@/animations/topDown';

const formSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
})

function Recover() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <motion.div
      initial={{ x: 200, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex text-black items-center justify-center w-full dark:text-white">
      <div className="flex flex-col items-center px-8 justify-center gap-4 ">
        <div className="flex flex-col gap-2 text-center text-slate-200">
          <h1 className="text-2xl font-serif text-black dark:text-slate-100">Esqueceu sua senha ?</h1>
          <span className="text-black dark:text-slate-200">Te ajudamos a lembrar tudo o que importa!</span>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 w-auto items-center mt-4">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <InputWithLabel id="email" type="email" label="Recuperar senha" value="" placeholder="Digite o email da sua conta" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            < Button variant='default' type="submit" className="w-96">Enviar e-mail</Button>
          </form>
        </Form>
        <div className="w-full text-end">
          <Link href="/" className="text-black dark:text-slate-200 hover:text-blue-300 cursor-pointer text-xs">
            <Button variant='secondary' type="submit" className="w-96">Fazer Login</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Recover;