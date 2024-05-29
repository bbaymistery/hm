import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/layouts/Layout";


export default function HomePage() {
  return (
    <Layout>
      <div className={styles.homecontainer}>
        s
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