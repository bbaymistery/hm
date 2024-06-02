import React from 'react'
import styles from "./styles.module.scss";
import { useVisibility } from '@/hooks/useVisibility';
import Image from 'next/image';
const icons = [
    {
        image: "/images/otherservices/other1.webp",
        link: "Zuverlässiger-Partner",
        altName: "Zuverlässiger Partner",
        p: "Zuverlässiger Partner",
        exp: "Wir erbringen unsere Dienstleistungen qualitativ hochwertig und sicher..."
    },
    {
        image: "/images/otherservices/other2.webp",
        link: "Garten",
        altName: "Garten",
        p: "Garten",
        exp: "Wir versorgen Pflanzen mit den entsprechenden Bedürfnissen..."


    },
    {
        image: "/images/otherservices/others3.webp",
        link: "Balkon",
        altName: "Balkon",
        p: "Balkon",
        exp: "Schaffen Sie eine grüne Wand, indem Sie Blumentöpfe an die Wand Ihres Balkons stellen."
    },
    {
        image: "/images/otherservices/others4.webp",
        link: "Oft-gefragt",
        altName: "Oft gefragt",
        p: "Oft gefragt",
        exp: `Wie viel kostet der Service? Kann ich der Qualität der Dienstleistungen vertrauen?`
    },
    {
        image: "/images/otherservices/others5.webp",
        link: "Blumengarten",
        altName: "Blumengarten",
        p: "Blumengarten ",
        exp: "Schaffen Sie einen Garten voller bunter Blumen wie Petunien, Geranien, Astilben und Phlox."
    },
    {
        image: "/images/otherservices/others6.webp",
        link: "Harmonisches-Ambiente-in-Ihrem-Zuhause",

        altName: "Harmonisches Ambiente in Ihrem Zuhause",
        p: "Harmonisches Ambiente in Ihrem Zuhause",
        exp: "Licht und Luft , Farben und Dekoration , Möbelanordnung"
    },
    {
        image: "/images/otherservices/others7.webp",
        link: "Saubere-Fenster-gute-Wohnatmosphäre-angenehmer-Geruch",
        altName: "Saubere Fenster, gute Wohnatmosphäre, angenehmer Geruch",
        p: "Saubere Fenster, gute Wohnatmosphäre, angenehmer Geruch",
        exp: "Reinigen Sie die Fenster an einem bewölkten Tag oder bei bewölktem Wetter."
    },
    {
        image: "/images/otherservices/others8.webp",
        altName: "Stauraum vergrößern",
        link: "Stauraum-vergrößern",
        p: "Stauraum vergrößern",
        exp: `Nutzen Sie den vertikalen Raum im Haus maximal aus.
        Fügen Sie Regale, Kleiderbügel oder Hängekörbe hinzu.`
    },
]
const News = () => {
    const [isVisible, ref] = useVisibility();

    return (
        <div className={`${styles.news} page`} >
            <div className={`${styles.news_section} page_section`}>
                <div className={`${styles.news_section_container} page_section_container`}>
                    <div className={styles.bg_image}>
                        <Image fetchPriority='auto'
                            className={styles.landing_image} fill style={{ objectFit: "cover", objectPosition: "center" }} src={"/images/bgDiscount.webp"} alt="Image" sizes="100vw" />
                    </div>
                    <div className={styles.title_div}>
                        <h2 ref={ref} className={` ${isVisible ? styles.faderight : ''}`} >
                            Sonstige Dienstleistungen
                        </h2>
                        <p>Wir sorgen für Ihren Komfort</p>
                    </div>
                    <div ref={ref} className={`${styles.featureIcons} ${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {icons.map((icon, idx) => {
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <a href={`/news/${icon.link}?${idx + 1}`}>
                                        <div className={styles.tourcard_header}>
                                            <div className={styles.tourcard_image}>
                                                <Image src={icon.image ? icon.image : "/images/default.webp"} width={250} height={198} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" alt={icon.altName} />
                                            </div>

                                        </div>
                                        <div className={styles.tourcard_content}>

                                            <h3 className={styles.title}>
                                                <span>{icon.p}</span>
                                            </h3>
                                            <div className={styles.tourcard_rating}>
                                                {icon.exp ? icon.exp : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus quas inventore laudantium repellat"}
                                            </div>


                                        </div>

                                    </a>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News