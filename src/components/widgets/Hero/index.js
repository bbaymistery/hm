import React, { useEffect } from 'react'
import styles from "./styles.module.scss"
import Image from 'next/image'
// import AOS from 'aos';

const Hero = () => {
    // useEffect(() => {
    //     // AOS'u etkinleştir ve yapılandır
    //     AOS.init({
    //         offset: 200, // Sıçramayı tetikleme noktası
    //         duration: 600, // Animasyon süresi
    //         easing: 'ease-in-out', // Animasyon eğrisi
    //         delay: 300 // Gecikme süresi
    //     });
    // }, [])

    return (
        <div className={`${styles.hero}  page`} >
            <div className={`${styles.hero_section} page_section`}>
                <div className={`${styles.hero_section_container} page_section_container`}>
                <div className={styles.bg_image}>
                            <Image priority className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "CENTER" }} src={"/images/bgDiscount.webp"} alt="Image" sizes="100vw" />
                        </div>
                    <div className={styles.content}>
                        <div className={styles.image_Div}>
                            <Image
                                fetchPriority='auto'
                                className={styles.landing_image}
                                fill
                                src={"/images/HeRO.webp"} alt="Image" sizes="100vw" />
                        </div>

                        <div className={styles.info}>
                            <div className={styles.left}>
                                <h1 data-aos="fade-right" data-aos-delay={300}> Meisterservice Service in Sinsheim</h1>
                                <p data-aos="fade-right" data-aos-delay={600}>
                                    Günstig und hochwertig.
                                </p>
                                <p data-aos="fade-right" data-aos-delay={700}>
                                    Hochqualifiziertes und erfahrenes Personal.
                                </p>
                                <p data-aos="fade-right" data-aos-delay={500}>
                                    Erfahrene Handwerker helfen Ihnen bei der Lösung aller Probleme.
                                    <br />
                                </p>
                            </div>
                            <div className={styles.right}>
                                <div className={styles.right_content}>
                                    <h2 data-aos="fade-up">Kontakt</h2>
                                    <li data-aos="fade-up " data-aos-delay={300}>Erfahrenes Team
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={500}>
                                        Schneller Service
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay={600}>
                                        Günstige Preise
                                    </li>
                                    <br />
                                    <a href="555555" data-aos="fade-up" data-aos-delay={1500}>
                                        <i className="fa-solid fa-phone"></i>
                                        <span >+994 50 633 01 35</span>
                                    </a>
                                    <p data-aos="fade-up" data-aos-delay={1600}>Der Anruf ist kostenlos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero