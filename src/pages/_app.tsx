import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>민감피부와 함께, AsYun</title>
        <meta
          name="description"
          content="솔직한 피부 이야기와 믿음직한 정보로, 민감피부와 함께합니다 :)"
        />
        <meta property="og:title" content="민감피부와 함께, AsYun" />
        <meta
          property="og:description"
          content="솔직한 피부 이야기와 믿음직한 정보로, 민감피부와 함께합니다 :)"
        />
        <meta
          property="og:image"
          content="https://asyun.vercel.app/img/opengraphImg.png"
        />
        <meta property="og:url" content="https://asyun.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        {/* viewport는 여기 (Document 말고) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

