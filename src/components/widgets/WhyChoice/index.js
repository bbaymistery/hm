import React from 'react';
import styles from "./styles.module.scss";
import { useVisibility } from '../../../hooks/useVisibility';
import Image from 'next/image';
const icons = [
    {
        image: "/images/icons/ticket.webp",
        altName: "icon",
        h3: "Individueller Ansatz für den Kunden",
        p: " Alle Dienstleistungen für die Reinigung Ihres Hauses und Büros"
    },
    {
        image: "/images/icons/hot-air-balloon.webp",
        altName: "icon",
        h3: "Hochwertige Dienstleistungen",
        p: "Wir setzen auf erstklassige Materialien und modernste Techniken, um Ihnen die besten Ergebnisse zu bieten."
    },
    {
        image: "/images/icons/diamond.webp",
        altName: "icon",
        h3: "Kürzeste Bearbeitungszeit",
        p: "Wir legen großen Wert auf Schnelligkeit und Verbesserungen. "
    },
    {
        image: "/images/icons/medal.webp",
        altName: "icon",
        h3: "Moderne Ausrüstung",
        p: "Beste Ergebnisse mit den neuesten Technologien"
    },
]
const WhyChoice = () => {


    const [isVisible, ref] = useVisibility();

    return (
        <div className={`${styles.whychoice}  page`} >
            <div className={`${styles.whychoice_section} page_section`}>
                <div className={`${styles.whychoice_section_container} page_section_container`}>
                    <h2 ref={ref} className={` ${isVisible ? styles.fade_bottom_to_top : ''}`}>Warum uns wählen</h2>
                    <div ref={ref} className={`${styles.featureIcons} ${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {icons.map((icon, idx) => {
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <div className={styles.featureIcon_icon}>
                                        <Image src={icon.image} height={60} width={60} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" alt={icon.altName} />
                                    </div>
                                    <h3>{icon.h3}</h3>
                                    <p className={styles.featureIcon__text}> {icon.p}  </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyChoice;
