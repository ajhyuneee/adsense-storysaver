'use client';

import {
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from 'next/navigation';
import Link from 'next/link';
import ChangeLocale from '../changeLocale';
import * as s from './FooterStyled';
import { useState } from 'react';
import { LocaleTypes } from '../../utils/localization/settings';
import { useTranslation } from '../../utils/localization/client';

export default function Footer() {
  const locale = useParams()?.locale as LocaleTypes;
  const urlSegments = useSelectedLayoutSegments();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation(locale, 'common');

  return (
    <s.FooterBox>
      Footer 영역
      <ChangeLocale />
    </s.FooterBox>
  );
}
