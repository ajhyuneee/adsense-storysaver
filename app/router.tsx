'use client';

import Header from '@components/header';
import ToastMsg from '@components/toastMsg';
import React from 'react';
import { CookiesProvider } from 'react-cookie';
import 'react-toastify/dist/ReactToastify.css';

const Router = (props: { children: React.ReactNode }) => {
  return (
    <>
      <CookiesProvider>
        <Header />
        {props.children}
        <ToastMsg />
      </CookiesProvider>
    </>
  );
};

export default Router;
