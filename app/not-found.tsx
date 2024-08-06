'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  const router = useRouter(); // 컴포넌트 내부로 이동

  return (
    <>
      <Container>
        {/* <Img src={'/img/404page.png'} /> */}
        <TextWrapper>
          <ErrText>404</ErrText>
          <p style={{ fontSize: 18 }}>This page could not be found.</p>
        </TextWrapper>
        <BackBtn onClick={() => router.back()}>뒤로가기</BackBtn>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 30rem 0;
  gap: 6rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ErrText = styled.div`
  display: inline-block;
  margin: 0px 20px 0px 0px;
  padding: 0px 23px 0px 0px;
  font-size: 24px;
  font-weight: 500;
  vertical-align: top;
  line-height: 49px;
  border-right: 1px solid gray;
`;
const BackBtn = styled.a`
  border: 1px solid black;
  padding: 1.2rem 1.6rem;
  font-size: 1.4rem;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

// const Img = styled.img`
//   max-width: 120rem;
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
// `;

export default NotFound;
