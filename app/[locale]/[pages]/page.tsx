import { Metadata } from 'next';
import PagesContainer from './PagesContainer';
import { SERVER } from '../../../config/config';

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const basePath = params.locale === 'ko' ? '' : `/${params.locale}`;

  return params.pages === 'reels-download'
    ? {
        title: `인스타그램 릴스 다운로드 - 토리뷰`,
        description: `토리뷰 사이트는 효과적인 인스타그램 릴스 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 릴스 다운 가능합니다.`,
        alternates: {
          canonical: `https://instastoryview.co.kr${basePath}/reels-download`,
        },
        openGraph: {
          locale: 'ko_KR',
          type: 'website',
          title: `인스타그램 릴스 다운로드 - 토리뷰`,
          description: `토리뷰 사이트는 효과적인 인스타그램 릴스 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 릴스 다운 가능합니다.`,
          url: `https://instastoryview.co.kr${basePath}/reels-download`,
          siteName: `인스타그램 릴스 다운로드 - 토리뷰`,
          images: `${SERVER}/og_image.jpeg`,
        },
        twitter: {
          card: 'summary_large_image',
          title: `인스타그램 릴스 다운로드 - 토리뷰`,
          images: `${SERVER}/og_image.jpeg`,
          description: `토리뷰 사이트는 효과적인 인스타그램 릴스 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 릴스 다운 가능합니다.`,
        },
        robots: {
          follow: true,
          index: true,
          'max-video-preview': -1,
          'max-snippet': -1,
          'max-image-preview': 'large',
        },
      }
    : params.pages === 'story-download'
      ? {
          title: `인스타그램 스토리 세이버 저장 다운로드 storysaver - 토리뷰`,
          description: `토리뷰 사이트는 효과적인 인스타그램 스토리 세이버 저장 storysaver 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 사진 저장 및 다운 가능합니다.`,
          alternates: {
            canonical: `https://instastoryview.co.kr${basePath}/story-download`,
          },
          openGraph: {
            locale: 'ko_KR',
            type: 'website',
            title: `인스타그램 스토리 세이버 저장 다운로드 storysaver - 토리뷰`,
            description: `토리뷰 사이트는 효과적인 인스타그램 스토리 세이버 저장 storysaver 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 사진 저장 및 다운 가능합니다.`,
            url: `https://instastoryview.co.kr${basePath}/story-download`,
            siteName: `인스타그램 스토리 세이버 저장 다운로드 storysaver - 토리뷰`,
            images: `${SERVER}/og_image.jpeg`,
          },
          twitter: {
            card: 'summary_large_image',
            title: `인스타그램 스토리 세이버 저장 다운로드 storysaver - 토리뷰`,
            images: `${SERVER}/og_image.jpeg`,
            description: `토리뷰 사이트는 효과적인 인스타그램 스토리 세이버 저장 storysaver 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 사진 저장 및 다운 가능합니다.`,
          },
          robots: {
            follow: true,
            index: true,
            'max-video-preview': -1,
            'max-snippet': -1,
            'max-image-preview': 'large',
          },
        }
      : params.pages === 'profile-photo-download'
        ? {
            title: `인스타그램 프로필 저장 다운로드 - 토리뷰`,
            description: `토리뷰 사이트는 효과적인 인스타그램 프로필 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 프로필 저장 및 다운 가능합니다.`,
            alternates: {
              canonical: `https://instastoryview.co.kr${basePath}/profile-photo-download`,
            },
            openGraph: {
              locale: 'ko_KR',
              type: 'website',
              title: `인스타그램 프로필 저장 다운로드 - 토리뷰`,
              description: `토리뷰 사이트는 효과적인 인스타그램 프로필 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 프로필 저장 및 다운 가능합니다.`,
              images: `${SERVER}/og_image.jpeg`,
              url: `https://instastoryview.co.kr${basePath}/profile-photo-download`,
              siteName: `인스타그램 프로필 저장 다운로드 - 토리뷰`,
            },
            twitter: {
              card: 'summary_large_image',
              title: `인스타그램 프로필 저장 다운로드 - 토리뷰`,
              description: `토리뷰 사이트는 효과적인 인스타그램 프로필 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 프로필 저장 및 다운 가능합니다.`,
              images: `${SERVER}/og_image.jpeg`,
            },
            robots: {
              follow: true,
              index: true,
              'max-video-preview': -1,
              'max-snippet': -1,
              'max-image-preview': 'large',
            },
          }
        : params.pages === 'video-download'
          ? {
              title: `인스타그램 영상 저장 다운로드 - 토리뷰`,
              description: `토리뷰 사이트는 효과적인 인스타그램 영상 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 영상 저장 및 다운 가능합니다.`,
              alternates: {
                canonical: `https://instastoryview.co.kr${basePath}/video-download`,
              },
              openGraph: {
                locale: 'ko_KR',
                type: 'website',
                title: `인스타그램 영상 저장 다운로드 - 토리뷰`,
                description: `토리뷰 사이트는 효과적인 인스타그램 영상 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 영상 저장 및 다운 가능합니다.`,
                images: `${SERVER}/og_image.jpeg`,
                url: `https://instastoryview.co.kr${basePath}/video-download`,
                siteName: `인스타그램 영상 저장 다운로드 - 토리뷰`,
              },
              twitter: {
                card: 'summary_large_image',
                title: `인스타그램 영상 저장 다운로드 - 토리뷰`,
                description: `토리뷰 사이트는 효과적인 인스타그램 영상 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 영상 저장 및 다운 가능합니다.`,
                images: `${SERVER}/og_image.jpeg`,
              },
              robots: {
                follow: true,
                index: true,
                'max-video-preview': -1,
                'max-snippet': -1,
                'max-image-preview': 'large',
              },
            }
          : params.pages === 'photo-download'
            ? {
                title: `인스타그램 사진 저장 다운로드 - 토리뷰`,
                description: `토리뷰 사이트는 효과적인 인스타그램 사진 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 사진 저장 및 다운 가능합니다.`,
                alternates: {
                  canonical: `https://instastoryview.co.kr${basePath}/photo-download`,
                },
                openGraph: {
                  locale: 'ko_KR',
                  type: 'website',
                  title: `인스타그램 사진 저장 다운로드 - 토리뷰`,
                  description: `토리뷰 사이트는 효과적인 인스타그램 사진 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 사진 저장 및 다운 가능합니다.`,
                  images: `${SERVER}/og_image.jpeg`,
                  url: `https://instastoryview.co.kr${basePath}/photo-download`,
                  siteName: `인스타그램 사진 저장 다운로드 - 토리뷰`,
                },
                twitter: {
                  card: 'summary_large_image',
                  title: `인스타그램 사진 저장 다운로드 - 토리뷰`,
                  description: `토리뷰 사이트는 효과적인 인스타그램 사진 다운로드 도구입니다. 빠르고 간편하게 비로그인으로 인스타그램 사진 저장 및 다운 가능합니다.`,
                  images: `${SERVER}/og_image.jpeg`,
                },
                robots: {
                  follow: true,
                  index: true,
                  'max-video-preview': -1,
                  'max-snippet': -1,
                  'max-image-preview': 'large',
                },
              }
            : params.pages === 'story-view'
              ? {
                  title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
                  description:
                    '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다. ',
                  alternates: {
                    canonical: `https://instastoryview.co.kr${basePath}/story-view`,
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
                    url: `https://instastoryview.co.kr${basePath}/story-view`,
                    siteName: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
                  },
                  twitter: {
                    card: 'summary_large_image',
                    title: '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
                    description:
                      '토리뷰 사이트는 효과적인 인스타 스토리 몰래보기 도구입니다. 빠르고 간편하게 비로그인으로 인스타 염탐 사이트 이용이 가능합니다.',
                    images: `${SERVER}/og_image.jpeg`,
                  },
                }
              : params.pages === 'term-condition'
                ? {
                    title: '이용약관',
                    description:
                      '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 이용약관을 확인해 보세요.',
                    alternates: {
                      canonical: `https://instastoryview.co.kr${basePath}/term-condition`,
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
                      title: '이용약관',
                      description:
                        '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 이용약관을 확인해 보세요.',
                      images: `${SERVER}/og_image.jpeg`,
                      url: `https://instastoryview.co.kr${basePath}/term-condition`,
                      siteName: '이용약관',
                    },
                    twitter: {
                      card: 'summary_large_image',
                      title: '이용약관',
                      description:
                        '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 이용약관을 확인해 보세요.',
                      images: `${SERVER}/og_image.jpeg`,
                    },
                  }
                : params.pages === 'privacy-policy'
                  ? {
                      title: '개인정보처리방침',
                      description:
                        '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 개인정보처리방침을 확인해 보세요.',
                      alternates: {
                        canonical: `https://instastoryview.co.kr${basePath}/privacy-policy`,
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
                        title: '개인정보처리방침',
                        description:
                          '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 개인정보처리방침을 확인해 보세요.',
                        images: `${SERVER}/og_image.jpeg`,
                        url: `https://instastoryview.co.kr${basePath}/privacy-policy`,
                        siteName: '개인정보처리방침',
                      },
                      twitter: {
                        card: 'summary_large_image',
                        title: '개인정보처리방침',
                        description:
                          '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 개인정보처리방침을 확인해 보세요.',
                        images: `${SERVER}/og_image.jpeg`,
                      },
                    }
                  : params.pages === 'remove-profile'
                    ? {
                        title: '프로필 삭제 요청',
                        description:
                          '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 프로필 삭제 요청에 대한 내용을 확인해 보세요.',
                        alternates: {
                          canonical: `https://instastoryview.co.kr${basePath}/remove-profile`,
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
                          title: '프로필 삭제 요청',
                          description:
                            '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 프로필 삭제 요청에 대한 내용을 확인해 보세요.',
                          images: `${SERVER}/og_image.jpeg`,
                          url: `https://instastoryview.co.kr${basePath}/remove-profile`,
                          siteName: '프로필 삭제 요청',
                        },
                        twitter: {
                          card: 'summary_large_image',
                          title: '프로필 삭제 요청',
                          description:
                            '토리뷰에서 운영되는 인스타 스토리 몰래보기 서비스에 관련된 프로필 삭제 요청에 대한 내용을 확인해 보세요.',
                          images: `${SERVER}/og_image.jpeg`,
                        },
                      }
                    : {
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
                          siteName:
                            '토리뷰 - 인스타 스토리 몰래보기 염탐 사이트',
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
