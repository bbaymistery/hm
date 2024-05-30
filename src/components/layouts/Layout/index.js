import Head from "next/head";

import Header from "../../widgets/Header";
import TopHeader from "../../widgets/Topheader";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from "@/components/widgets/Footer/Footer";

const Layout = ({ children, title = "Services", noFooter = false, noTopbar = false, description = "It is best way", keywords = "Service home,quality", }) => {
  const router = useRouter();

  return (
    <div className={styles.container_layout}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="distribution" content="Global" />
        {/* <meta name="copyright" content="Copyright London-heathrow.taxi  2022. All rights reserved." /> */}
        <meta name="resource-type" content="document" />
        {/* <meta name="author" content="London-Heathrow.Taxi" /> */}
        <meta name="language" content="de"></meta>
        <meta name="robots" content="noindex" />
        {/* <meta name="robots" content="index,follow" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 " />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <meta name="google-site-verification" content="9niN--Hxw6fLfS5Om0lK1dGEvoDbwo-ZTxjamC9oz64" /> */}
        {/* bunu orijinal siteden ekledik */}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="chrome=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=10" />
        <meta name="rating" content="Safe For Kids" />
        <meta httpEquiv="X-UA-Compatible" content="IE=8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="IE=10" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        {/* <meta name="apple-mobile-web-app-title" content="Airport Taxi" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" /> */}
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />

      </Head>
      {!noTopbar ? <TopHeader /> : ""}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
