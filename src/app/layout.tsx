'use client';
import { Toaster } from '@/components/ui/toaster';
import AppProvider from '@/context';

import usePageHeader from '@/hooks/usePageHeader';
import Image from 'next/image';
import Header from './_components/header/header';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const excludedPaths = ['/sign-in'];
  const { showHeader } = usePageHeader({ excludedPaths });
  return (
    <AppProvider>
      <html lang="ja">
        <body
          className="min-h-full bg-backGround-primary"
        >
          {
            showHeader && <Header title="アンケート" variant="simple" icon={<Image alt="" width={30} height={30} src="/image/arrow_forward_ios.svg"></Image>} />
          }
          {children}
          <Toaster />
        </body>
      </html>
    </AppProvider>
  );
}
