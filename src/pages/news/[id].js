import { useRouter } from 'next/router';
import React from 'react'

const NewsId = () => {
    const router = useRouter()
    console.log(router);
    //news/Zuverlässiger%20Partner?1
    console.log(router.asPath.split("?")[1]);//id 


    return (
        <div>NewsId {router.query.id}</div>
    )
}

export default NewsId