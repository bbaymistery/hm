import "../styles/global.scss";
import React, { useEffect, useState } from "react";
import localFont from '@next/font/local';

const myFont = localFont({ src: '../../public/googleFonts/92zatBhPNqw73oTd4g.woff2' })


function MyApp({ Component, pageProps }) {
  return (
    <main style={{ fontFamily: myFont.style.fontFamily }}>
      <Component {...pageProps} />
    </main>
  );
}


export default (MyApp);
