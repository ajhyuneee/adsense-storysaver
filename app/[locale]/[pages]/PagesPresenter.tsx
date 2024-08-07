import { useParams, useRouter } from 'next/navigation';
import * as s from './PagesStyled';
import { LocaleTypes } from '../../../utils/localization/settings';
import { useTranslation } from '../../../utils/localization/client';

interface props {
  selectMenu: string;
  locale: string;
}

const PagesPresenter = (props: props) => {
  const router = useRouter();
  const locale = useParams()?.locale as LocaleTypes;
  const { t } = useTranslation(locale, 'common');

  return (
    <>
      <s.Container>
        <s.NavBox>nav영역</s.NavBox>
        <s.ContentBox>콘텐츠영역</s.ContentBox>
      </s.Container>
    </>
  );
};

export default PagesPresenter;
