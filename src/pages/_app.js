import "../styles/global.scss";
import React, { useEffect, useState } from "react";
import localFont from '@next/font/local';

const myFont = localFont({ src: '../../public/googleFonts/92zatBhPNqw73oTd4g.woff2' })

import 'aos/dist/aos.css';
import AOS from 'aos';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional, default is 1200ms
    });
  }, []);

  return (
    <main style={{ fontFamily: myFont.style.fontFamily }}>
      <Component {...pageProps} />
    </main>
  );
}


export default (MyApp);
