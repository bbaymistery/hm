import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layouts/Layout";
import WhyChoice from "@/components/widgets/WhyChoice";
import Hero from "@/components/widgets/Hero";
import Services from "@/components/widgets/Services";
import News from "@/components/widgets/News";


export default function HomePage() {
  return (
    <Layout>
      <div className={styles.homecontainer}>
        <Hero />

        <WhyChoice />
        <Services />
        <News />
      </div>
    </Layout>
  );
}



export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}