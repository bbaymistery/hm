import Layout from '@/components/layouts/Layout';
import SubServices from '@/components/widgets/SubServices';
import { useRouter } from 'next/router';
import React from 'react'
import styles from "./styles.module.scss"
const NewsId = () => {
    const router = useRouter()
    console.log(router);
    //news/Zuverlässiger%20Partner?1
    console.log(router.asPath.split("?")[1]);//id 


    return (

        <Layout description={""} title={""} keywords={""}>
            <div className={`${styles.link}  page`}>
                <div className={`${styles.link_section} page_section`}>
                    <div className={`${styles.link_section_container} page_section_container`}>

                        NewsId {router.query.id}
                        <br />
                        <br />
                        <br />
                        <h1 className={styles.linknametitle}>{router.query.linkname}</h1>
                        <br />
                        <SubServices />
                    </div>



                </div>
            </div>
        </Layout>
    )
}

export default NewsId