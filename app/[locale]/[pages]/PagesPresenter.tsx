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
      <s.Container>ㅁㄴㅇ</s.Container>
    </>
  );
};

export default PagesPresenter;
