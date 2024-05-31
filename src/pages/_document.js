import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    let pageProps = null;
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => {
          pageProps = props.pageProps;
          return <App {...props} />
        },
        enhanceComponent: (Component) => Component,
      })
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pageProps }
  }

  render() {
    let { schemas, mainCanonical = "" } = this?.props?.__NEXT_DATA__?.props?.pageProps//this comes from.[...pathname]
    let schemasOfPages = schemas || []//home page Terms and the rest page has different schemas 

    return (
      <Html lang="de">
        <Head >
          <link rel="icon" href="/favicon.ico" />
          {schemasOfPages?.length > 0 && schemasOfPages?.map(((schema, index) => {
            return <Script key={index} type="application/ld+json" strategy='beforeInteractive' >{JSON.stringify(schema, null, 2)}</Script>
          }))}
          {mainCanonical?.length > 0 && <link rel="canonical" href={mainCanonical} />}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument;