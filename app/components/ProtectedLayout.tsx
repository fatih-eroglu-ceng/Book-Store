'use client';

import { useSession } from 'next-auth/react';
import { useRouter,  usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status !== 'loading') {
      setIsLoading(false);
    }

    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if ((status === 'unauthenticated') && pathname!=='/login') {
    return <div>Loading...</div>;
  }
  return <>{children}</>;
}
