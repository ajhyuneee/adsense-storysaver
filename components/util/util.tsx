import { ToastOptions, toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';
import 'react-toastify/dist/ReactToastify.css';
import { Cookies } from 'react-cookie';

export function formatFollowerCount(count: number) {
  if (count < 1000) {
    return count.toString();
  } else {
    return `${Math.ceil(count / 1000)}k`;
  }
}

export async function downloadImage(url: string, name: string): Promise<void> {
  try {
    // 지정된 URL에서 이미지 데이터를 가져옵니다
    const resp = await fetch(url);

    // 가져온 데이터를 Blob으로 변환합니다
    const blob = await resp.blob();

    // Blob을 이미지를 나타내는 URL로 변환합니다
    const imageUrl = window.URL.createObjectURL(blob);

    // 다운로드를 위한 가상의 <a> 요소를 생성합니다
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = imageUrl;
    a.download = name; // 다운로드될 파일의 원하는 이름을 설정합니다
    document.body.appendChild(a);

    // 가상의 <a> 요소를 클릭하여 다운로드를 시작합니다
    a.click();

    // 다운로드가 완료되면 생성한 URL을 해제합니다
    window.URL.revokeObjectURL(imageUrl);
  } catch (error) {
    // 다운로드 중에 오류가 발생하면 알림을 표시합니다
    alert('다운로드 중 오류가 발생했습니다. 죄송합니다.');
  }
}

export const toastMsg = async (
  msg?: string,
  type?: string,
  options?: ToastOptions,
) => {
  switch (type) {
    case 'info':
      toast.info(msg, {
        ...options,
        hideProgressBar: true,
        position: isMobile ? 'bottom-center' : 'bottom-left',
      });
      break;
    case 'success':
      toast.success(msg, {
        ...options,
        hideProgressBar: true,
        position: isMobile ? 'bottom-center' : 'bottom-left',
      });
      break;
    case 'warning':
      toast.warn(msg, {
        ...options,
        hideProgressBar: true,
        position: isMobile ? 'bottom-center' : 'bottom-left',
      });
      break;
    case 'error':
      toast.error(msg, {
        ...options,
        hideProgressBar: true,
        position: isMobile ? 'bottom-center' : 'bottom-left',
      });
      break;
    default:
      toast(msg, {
        ...options,
        hideProgressBar: true,
        position: isMobile ? 'bottom-center' : 'bottom-left',
      });
      break;
  }
};

const cookies = new Cookies();

export const setCookie = (
  name: string,
  value: string | boolean,
  options?: any,
) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
