'use client';

import Footer from '@components/footer';
import Header from '@components/header';
import ToastMsg from '@components/toastMsg';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';

const Router = (props: { children: React.ReactNode }) => {
  return (
    <>
      <CookiesProvider>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: '#935d8c',
            paddingBottom: '12rem',
          }}
        >
          <Header />
          {props.children}
          <Footer />
        </div>
        <ToastMsg />
      </CookiesProvider>
    </>
  );
};

export default Router;
