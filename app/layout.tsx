import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const open_sans = Open_Sans({
	variable: '--noto-sans-font',
	weight: ['300', '400', '500', '700'],
	style: ['normal'],
	fallback: ['sans-serif'],
	subsets: ['cyrillic', 'cyrillic', 'latin', 'latin-ext'],
	preload: true,
});

export const metadata: Metadata = {
	title: 'My blog',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={open_sans.className}>{children}</body>
		</html>

	);
}