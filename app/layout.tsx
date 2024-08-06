import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Router from './router';
import StyledComponentsRegistry from '@components/util/registry';
import { SERVER } from '../config/config';
import { GoogleAdsense } from '@components/util/GoogleAdsense';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
  description:
    '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다. ',
  robots: {
    follow: true,
    index: true,
    'max-video-preview': -1,
    'max-snippet': -1,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: 'https://instastoryview.co.kr',
  },
  openGraph: {
    locale: 'ko_KR',
    type: 'website',
    title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
    description:
      '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다.',
    url: 'https://instastoryview.co.kr/',
    siteName: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
    images: `${SERVER}/og_image.jpg`,
  },
  twitter: {
    card: 'summary_large_image',
    title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
    images: `${SERVER}/og_image.jpg`,
    description:
      '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={inter.className}
        style={{
          fontFamily: 'Noto Sans KR,Helvetica,Arial,sans-serif',
          // overflow: 'hidden',
        }}
      >
        <StyledComponentsRegistry>
          <Router>{children}</Router>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
