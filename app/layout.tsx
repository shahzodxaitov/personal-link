import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import TrackerProvider from '@/components/TrackerProvider';
import './globals.css';
import { config } from '@/config';

// Using Inter as a close approximation to SF Pro for that clean Mac look
const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: `${config.profile.name} | ${config.profile.occupation}`,
    description: config.profile.bio,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <TrackerProvider />
            </head>
            <body className={`${inter.className} bg-[#000000] text-[#f5f5f7] antialiased min-h-screen selection:bg-white/20`}>
                {children}
            </body>
        </html>
    );
}
