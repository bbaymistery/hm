import { useRouter } from 'next/router';
import { services } from '@/constants/headerLinkNames';
import React from 'react'
import CustomError from './404';
import Layout from '@/components/layouts/Layout';
import styles from "./styles.module.scss"
import env from '@/resources/env';
import SubServices from '@/components/widgets/SubServices';
const LinkName = (props) => {
    let { error } = props
    const router = useRouter();

    return (
        <div>
            {error ? <CustomError />
                :
                <Layout description={props.description} title={props.title} keywords={props.keywords}>
                    <div className={`${styles.link}  page`}>
                        <div className={`${styles.link_section} page_section`}>
                            <div className={`${styles.link_section_container} page_section_container`}>
                                <h1 className={styles.linknametitle}>{router.query.linkname}</h1>
                                <br />
                                <SubServices />
                            </div>



                        </div>
                    </div>
                </Layout>
            }
        </div>
    );
};

export default LinkName;

function createBreadcrumbSchema(pathname) {
    return {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "item": { "@id": `${env.websiteDomain}`, "name": "Home" }
            },
            {
                "@type": "ListItem",
                "position": 2,
                "item": { "@id": `${env.websiteDomain}${pathname}/`, "name": pathname }
            },
        ]
    };
}
export async function getServerSideProps(context) {
    let url = `/${context.query.linkname}`
    let error = false
    let title = ""
    let keywords = ""
    let description = ""
    let urlcanonical = ""
    let schemas = []


    // Breadcumb Schema
    const breadcumbSchema = createBreadcrumbSchema(url);
    schemas.push(breadcumbSchema);

    const isValidService = services.some(service => service.url === url);
    if (!isValidService) error = true

    services.map((service, i) => {
        if (service.url === url) {
            description = services[i].description
            title = services[i].title
            keywords = services[i].keywords
            urlcanonical = services[i].urlCanonical
        }
    });


    return {
        props: {
            error,//front
            title,//front
            keywords,//front
            description,//front
            mainCanonical: urlcanonical,
            schemas,

        }
    };
}