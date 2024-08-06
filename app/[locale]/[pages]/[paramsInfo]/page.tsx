import { Metadata } from 'next';
import { SERVER } from '../../../../config/config';
import PagesContainer from '../PagesContainer';

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const basePath = params.locale === 'ko' ? '' : `/${params.locale}`;

  return {
    title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
    description:
      '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다. ',
    alternates: {
      canonical: `https://instastoryview.co.kr${basePath}`,
    },
    robots: {
      follow: true,
      index: true,
      'max-video-preview': -1,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
    openGraph: {
      locale: 'ko_KR',
      type: 'website',
      title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
      description:
        '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다.',
      images: `${SERVER}/og_image.jpeg`,
      url: `https://instastoryview.co.kr${basePath}`,
      siteName: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
    },
    twitter: {
      card: 'summary_large_image',
      title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
      description:
        '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다.',
      images: `${SERVER}/og_image.jpeg`,
    },
  };
};

export default PagesContainer;
