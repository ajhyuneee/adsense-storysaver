'use client';

import React, { useEffect } from 'react';
import {
  useParams,
  useRouter,
  useSelectedLayoutSegments,
} from 'next/navigation';
import styled from 'styled-components';
import type { NextRequest } from 'next/server';
import axios from 'axios';

const ChangeLocale = () => {
  const router = useRouter();
  const params = useParams();
  const urlSegments = useSelectedLayoutSegments();

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;

    // This is used by the Header component which is used in `app/[locale]/layout.tsx` file,
    // urlSegments will contain the segments after the locale.
    // We replace the URL with the new locale and the rest of the segments.
    if (urlSegments[2]) {
      router.push(`/${newLocale}/${urlSegments[1]}/${urlSegments[2]}`);
    } else if (urlSegments[1]) {
      router.push(`/${newLocale}/${urlSegments[1]}`);
    } else {
      router.push(`/${newLocale}`);
    }
  };

  useEffect(() => {
    const res = axios.get('https://geolocation-db.com/json/').then((res) => {
      console.log(res.data.country_code.toLowerCase());
      let lnggCd = '';
      switch (lnggCd) {
        case 'KR':
          lnggCd = 'ko';
          break;
        case 'US':
        case 'GB':
          lnggCd = 'en';
          break;
        case 'JP':
          lnggCd = 'ja';
          break;
        case 'IN':
          lnggCd = 'de';
          break;
        case 'ES':
        case 'BR':
        case 'AR':
          lnggCd = 'br';
          break;
        case 'ID':
          lnggCd = 'id';
          break;
        case 'MX':
          lnggCd = 'mx';
          break;
        default:
          lnggCd = 'ko';
      }
      if (
        lnggCd &&
        ['ko', 'en', 'ja', 'de', 'br', 'id', 'tr', 'mx'].includes(lnggCd)
      ) {
        if (urlSegments[2]) {
          router.push(`/${lnggCd}/${urlSegments[1]}/${urlSegments[2]}`);
        } else if (urlSegments[1]) {
          router.push(`/${lnggCd}/${urlSegments[1]}`);
        } else {
          // router.push(`/${lnggCd}`);
        }
      }
    });
  }, []);

  return (
    <LocaleBox onChange={handleLocaleChange} value={params.locale}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
      <option value="ja">日本語</option>
      <option value="de">Indian</option>
      <option value="br">Português</option>
      <option value="id">bahasa</option>
      <option value="tr">Türkçe</option>
      <option value="mx">maxicore</option>
    </LocaleBox>
  );
};

export default ChangeLocale;

const LocaleBox = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #8b95a1;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;

  /* 화살표 제거를 위한 스타일 */
  -webkit-appearance: none; /* 크롬, 사파리 등 */
  -moz-appearance: none; /* 파이어폭스 */
  appearance: none; /* 표준 속성 */
`;
