'use server'

import { supabaseServer } from '@/auth/supabase'
import { Provider } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'


export async function login(formData: FormData) {
    const supabase = await supabaseServer()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData: FormData) {
    const supabase = await supabaseServer()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(data)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function loginWithProvider(formData: FormData) {
    const supabase = await supabaseServer()
    const provider = formData.get('provider') as Provider

    const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
    console.log('Redirecting to:', redirectTo)

    const { error, data } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo,
        }
    })

    if (error) {
        redirect('/error')
    }

    if (data?.url) {
        redirect(data.url)
    }

    redirect('/')
}
