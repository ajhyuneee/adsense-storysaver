import Script from 'next/script';

export function GoogleAdsense() {
  return (
    <>
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_Google_Adsense_Key}`}
      />
    </>
  );
}
