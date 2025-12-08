import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  title: '프론트엔드 개발자 - 이제찬 포트폴리오',
  description: '5년 차 프론트엔드 개발자 이제찬입니다. React와 TypeScript를 중심으로 성능 최적화와 레거시 전환을 전문으로 합니다.',
  icons: {
    icon: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
