'use client';

import { useMemo } from 'react';
import PagesPresenter from './PagesPresenter';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { LocaleTypes } from '../../../utils/localization/settings';
import { useTranslation } from '../../../utils/localization/client';

const PagesContainer = (params: any) => {
  const location = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(location, 'common');
  const router = useRouter();
  const queryParams = useSearchParams();

  const selectMenu = useMemo(() => params.params.pages, [params.params.pages]);
  const locale = useMemo(() => params.params.locale, [params.params.locale]);

  return (
    <>
      <PagesPresenter selectMenu={selectMenu} locale={locale} />
    </>
  );
};

PagesContainer.defaultProps = {};

export default PagesContainer;
