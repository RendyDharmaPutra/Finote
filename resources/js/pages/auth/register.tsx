import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import { SubmitBtn } from '@/components/form/submit-btn';
import { TextField } from '@/components/form/text-field';
import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Buat akun" description="Masukkan rincian di bawah untuk membuat akun anda">
            <Head title="Daftar" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <TextField
                        label="Nama"
                        name="name"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        disabled={processing}
                        placeholder="Nama Lengkap"
                        message={errors.name}
                    />

                    <TextField
                        label="Alamat Email"
                        name="email"
                        type="email"
                        tabIndex={2}
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        disabled={processing}
                        placeholder="email@example.com"
                        message={errors.email}
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        tabIndex={3}
                        autoComplete="new-password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        disabled={processing}
                        placeholder="Password"
                        message={errors.password}
                    />

                    <TextField
                        label="Konfirmasi Password"
                        name="password_confirmation"
                        type="password"
                        tabIndex={4}
                        autoComplete="new-password"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        disabled={processing}
                        placeholder="Konfirmasi password"
                        message={errors.password_confirmation}
                    />

                    <SubmitBtn label="Buat Akun" type="submit" tabIndex={5} processing={processing} className="mt-2 w-full" />
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Sudah punya akun?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Masuk disini
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
