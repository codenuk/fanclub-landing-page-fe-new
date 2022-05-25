/* eslint-disable @next/next/inline-script-id */
import Head from "next/head";
import React from "react";
import { Footer, NavBar } from "../../containers";
import { PageWrapper } from "./pageLayout.styles";
import Script from "next/script";

type PageLayoutProps = {};

const PageLayout: React.FC<PageLayoutProps> = ({ children }: any) => {
  return (
    <>
      {/* Start Google Analytic */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2DY8KSCHZY}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2DY8KSCHZY', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      {/* End Google Analytic */}

      {/* Start Facebook Analytic */}
      <Script id="facebook-pixel">
        {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1466984350371556');
        fbq('track', 'PageView');
      `}
      </Script>
      {/* End Facebook Analytic */}

      <Head>
        <title>Fandom</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Start Icon App */}
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* End Icon App */}

        {/* Start Icon App */}
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb app id" />
        <meta
          property="og:title"
          content="Get closer to your favourite artists"
        />
        <meta name="twitter:card" content="summary" />
        <meta property="og:description" content="Register now. Free 100 coin" />
        <meta
          property="og:image"
          content={"www.fandom.co.th/images/ogImageNew.png"}
        />
        <meta
          property="og:image:secure_url"
          content={"www.fandom.co.th/images/ogImageNew.png"}
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* End Preview Social Media App */}
      </Head>
      <NavBar />
      <PageWrapper>{children}</PageWrapper>
      <Footer />
    </>
  );
};

PageLayout.defaultProps = {};

export default PageLayout;
