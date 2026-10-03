"use client";

import { authClient } from '@/app/lib/auth-client';
import { Button } from '@heroui/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const LogoutBtn = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <Button
            onClick={async () => {
                await authClient.signOut();
                router.push("/")
                router.refresh();
            }}
            className="rounded-sm bg-slate-200 text-red-700 px-6"
            variant="primary"
        >
            Logout
        </Button>
    );
};

export default LogoutBtn;