'use client';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loginSchema } from './_components/validations';

export default function SignInPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(_values: z.infer<typeof loginSchema>) {

  }

  return (

    <div className="flex flex-col items-center justify-center p-6 pt-20">
      <div className="text-[32px] font-bold leading-[48px] text-text-neutral">BabyTrack</div>
      <div className="text-center text-base font-normal text-text-primary">BabyTrackは健診を楽にし、お子さんの発達度合をチェックできるものです</div>
      <div className="mt-8 flex w-full flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className="py-[13px]" placeholder="電話番号を入力" icon={<div className=" !size-[24px]">123</div>} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pasword"
              render={({ field }) => (
                <FormItem>

                  <FormControl>
                    <Input className="py-[13px]" placeholder="電話番号を入力" icon={<div className=" !size-[24px]">123</div>} {...field} />

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </form>
        </Form>
        <Link href="#" className="mx-auto mt-6 text-sm text-text-link !underline">パスワードをお忘れの方はこちら</Link>
        <div className="mt-8 space-y-6">
          <Button type="submit" rounded="full" textcolor="white" size="default" background="primarypale">ログイン</Button>
          <Button size="default" rounded="full" variant="outline" textcolor="primarypale">ログイン</Button>
        </div>
      </div>
    </div>

  );
}
