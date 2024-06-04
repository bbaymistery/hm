import React from 'react'
import styles from "./styles.module.scss"
import { services } from '@/constants/headerLinkNames'
const SubServices = () => {
    return (
        <div className={styles.page}>

            <h1>Unsere Leistungen</h1>

            <br />
            <div className={styles.boxs_div}>
                {services.map((service, index) => {
                    if (index + 1 === 5) {
                        return null;
                    }
                    return <button key={index}>
                        {service.text}
                    </button>;
                })}
            </div>


        </div>
    )
}

export default SubServices