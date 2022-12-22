import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

var NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-KL4QWK9J60';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="theme-compiled">
        <Head />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-KL4QWK9J60"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KL4QWK9J60', {
              page_path: window.location.pathname,
            });
                `}
        </Script>
        <body
          className={`antialiased text-lg bg-white dark:bg-gray-900 dark:text-white leading-base`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
