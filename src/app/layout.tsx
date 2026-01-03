import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leejaechan-portfolio.vercel.app'), // TODO: 실제 배포 도메인으로 변경 필요
  title: {
    default: '프론트엔드 개발자 - 이제찬 포트폴리오',
    template: '%s | 이제찬 포트폴리오',
  },
  description: '5년 차 프론트엔드 개발자 이제찬입니다. React와 TypeScript를 중심으로 성능 최적화와 레거시 전환을 전문으로 합니다. 사용자 경험을 최우선으로 생각하는 개발자입니다.',
  keywords: ['프론트엔드 개발자', 'Web Frontend Developer', 'React', 'TypeScript', 'Next.js', '포트폴리오', '이제찬', 'Lee Jaechan', 'Frontend Portfolio'],
  authors: [{ name: 'Jaechan Lee', url: 'https://github.com/jeky22' }], // Github URL based on workspace info
  creator: 'Jaechan Lee',
  publisher: 'Jaechan Lee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: '프론트엔드 개발자 - 이제찬 포트폴리오',
    description: '사용자 중심의 웹 경험을 만드는 5년 차 프론트엔드 개발자 이제찬의 포트폴리오입니다.',
    url: 'https://leejaechan-portfolio.vercel.app',
    siteName: '이제찬 포트폴리오',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png', // TODO: 실제 OG 이미지 경로 확인 필요 (없으면 생성 필요)
        width: 1200,
        height: 630,
        alt: '이제찬 포트폴리오 메인 이미지',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '프론트엔드 개발자 - 이제찬 포트폴리오',
    description: '성능 최적화와 사용자 경험 개선에 집중하는 프론트엔드 개발자 이제찬입니다.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://leejaechan-portfolio.vercel.app',
  },
};

export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={notoSansKr.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jaechan Lee',
              jobTitle: 'Frontend Developer',
              url: 'https://leejaechan-portfolio.vercel.app',
              sameAs: [
                'https://github.com/jeky22',
                // 'https://linkedin.com/in/your-profile', // TODO: 링크드인 등 추가 프로필 링크
              ],
              description: '5년 차 프론트엔드 개발자. React, TypeScript, Next.js 전문가.',
              image: 'https://leejaechan-portfolio.vercel.app/images/og-image.png', // TODO: 실제 이미지 URL
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
