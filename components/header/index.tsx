'use client';

import {
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from 'next/navigation';
import Link from 'next/link';
import ChangeLocale from '../changeLocale';
import * as s from './HeaderStyled';
import { useState } from 'react';
import { LocaleTypes } from '../../utils/localization/settings';
import { useTranslation } from '../../utils/localization/client';

export default function Header() {
  const locale = useParams()?.locale as LocaleTypes;
  const urlSegments = useSelectedLayoutSegments();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation(locale, 'common');

  const menuList = [
    {
      title: t('Sneak peek at Instagram stories'),
      url: `/${urlSegments[0]}/story-view`,
    },
    {
      title: t('Download Instagram Story'),
      url: `/${urlSegments[0]}/story-download`,
    },
    {
      title: t('Download Instagram Reels'),
      url: `/${urlSegments[0]}/reels-download`,
    },
    {
      title: t('Download Instagram Profile Photo HD'),
      url: `/${urlSegments[0]}/profile-photo-download`,
    },
    {
      title: t('Download Instagram Photos'),
      url: `/${urlSegments[0]}/photo-download`,
    },
    {
      title: t('Instagram video download'),
      url: `/${urlSegments[0]}/video-download`,
    },
  ];

  return (
    <s.HeaderBox>
      <s.LogoBox>
        <s.LogoImage src={`https://picsum.photos/110${1}`} alt="로고 이미지" />
      </s.LogoBox>
      <s.TitleBox>
        <s.HeaderTitle>StorySaver.net</s.HeaderTitle>
        <s.HeaderH2>
          {'Download Instagram Stories, Highlights and Videos'}
          <br />
          {'Online Easily with one simple click.'}
        </s.HeaderH2>
      </s.TitleBox>
    </s.HeaderBox>
  );
}
