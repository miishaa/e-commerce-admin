import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { ModalProvider } from '@/providers/modal-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'E-Commerce App',
    description: 'E-Commerce App',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <ModalProvider />
                <body className={inter.className}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
