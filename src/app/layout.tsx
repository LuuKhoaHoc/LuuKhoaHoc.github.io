import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lưu Khoa Học - Full-Stack Developer & Software Engineer',
  description:
    'Passionate full-stack developer specializing in React, Next.js, and modern web technologies. Building user-centric applications with clean, efficient code.',
  keywords: [
    'Lưu Khoa Học',
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Web Developer',
    'Software Engineer',
  ],
  authors: [{ name: 'Lưu Khoa Học' }],
  creator: 'Lưu Khoa Học',
  openGraph: {
    title: 'Lưu Khoa Học - Full-Stack Developer',
    description:
      'Passionate full-stack developer specializing in modern web technologies',
    url: 'https://luukhoahoc.me',
    siteName: 'Lưu Khoa Học Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lưu Khoa Học - Full-Stack Developer',
    description:
      'Passionate full-stack developer specializing in modern web technologies',
    creator: '@luukhoahoc',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
