'use client'
import { useState } from 'react'
import { createClient } from "@/utils/supabase/client";

export default function Login() {
    const supabase = createClient()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login() {

        await supabase.auth.signInWithPassword({ email, password })
        location.href = '/admin'
    }


    const logout = async () => {
        await supabase.auth.signOut()
    }

    return (
        <div className="p-10">
            <input placeholder="email" className='border-amber-50' onChange={e => setEmail(e.target.value)} />
            <input type="password" className='border-amber-50' onChange={e => setPassword(e.target.value)} />
            <button onClick={login}>Login</button>
        </div>
    )
}
