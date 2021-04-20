import '../styles/fonts/SeoulHangangJungM/seoul-hangang-jung-m.css'
import '../styles/globals.css'
import '../styles/test.css'
import 'animate.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head >
        <meta name="google-site-verification" content="RN2CstU6sdPwa8PeQ71QqsRvC9CIsh8oMrLh3sZQqsQ" />
        <meta property="og:title" content="프론트엔드 개발자 - 이제찬 포트폴리오 웹사이트" key="title" />
        <meta property="og:description" content='인터랙티브한 웹 개발을 지향하는 프론트엔드 개발자 이제찬입니다. "어떻게 하면 사용자가 더 쓰기편한 서비스를 만들 수 있을까?"에 대하여 늘 고민하며 개발합니다.' key="description" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="target-densitydpi=device-dpi, user-scalable=0, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, width=device-width" />
      </Head >
      <span>
        <Component {...pageProps} />,
    </span>
    </>
  )
}

export default MyApp
