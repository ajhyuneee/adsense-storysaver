import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  return <ToastContainer newestOnTop={false} toastClassName="custom-toast" />;
}

export default React.memo(Toast);
