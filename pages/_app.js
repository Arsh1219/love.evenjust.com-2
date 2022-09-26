import { useEffect } from "react";
import { useRouter } from "next/router";
import { UserWrapper } from "../context/state";
import Script from "next/script";
import Head from "next/head";
import { pageview } from "../lib/gtm";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'UA-242082267-2');
          `,
        }}
      />

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6010823966003879"
      ></Script>
      {/* <Script>
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-6010823966003879",
        enable_page_level_ads: true,
      });
    </Script> */}

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6010823966003879"
      ></Script>

      <UserWrapper>
        <Component {...pageProps} />
      </UserWrapper>
    </>
  );
}

export default MyApp;
