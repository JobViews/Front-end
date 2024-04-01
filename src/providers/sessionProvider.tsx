'use client';

import { SessionProvider } from 'next-auth/react';

export default function NextAuthSessionProvider({ children }: React.PropsWithChildren<{}>) {
	return <SessionProvider>{children}</SessionProvider>;
}
