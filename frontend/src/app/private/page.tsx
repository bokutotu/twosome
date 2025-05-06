import { supabaseServer } from '@/auth/supabase'
import { redirect } from 'next/navigation'


export default async function PrivatePage() {
  const supabase = await supabaseServer()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth')
  }

  return <p>Hello {data.user.email}</p>
}
