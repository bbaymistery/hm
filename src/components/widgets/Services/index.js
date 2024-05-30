import React from 'react';
import styles from "./styles.module.scss";
import { useVisibility } from '../../../hooks/useVisibility';
import Image from 'next/image';
const icons = [
    {
        image: "/images/cilingirs.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Schlüsseldienst",
        rate: "4.8",
        price: "$189.25"
    },
    {
        image: "/images/haseere.jpeg",

        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Schädlingsbekämpfung",
        rate: "4.8",
        price: "$225.25"
    },
    {
        image: "/images/elektrik.jpeg",

        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Elektriker",
        rate: "4.8",
        price: "$189.25"
    },
    {
        image: "/images/sanitar.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Sanitär",
        rate: "4.8",
        price: "$943.25"
    },
    {
        image: "/images/boruu.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Rohrreinigung ",
        rate: "4.8",
        price: "$235"
    },
    {
        image: "/images/tisher.png",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Tischler",
        rate: "4.8",
        price: "$235"
    },
    {
        image: "/images/housemade.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Reinigungsdienste",
        rate: "4.8",
        price: "$189.25"
    },
 
    {
        image: "/images/ekipmanOnarm.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Gerätereparaturen ",
        rate: "4.8",
        price: "$189.25"
    },


    {
        image: "/images/doseme.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Fliesenarbeiten ",
        rate: "4.8",
        price: "$189.25"
    },


    {
        image: "/images/duvarcilikr.png",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Maurerdienste  ",
        rate: "4.8",
        price: "$189.25"
    },
    

    {
        image: "/images/boyads.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Malerarbeiten  ",
        rate: "4.8",
        price: "$189.25"
    },

    
    {
        image: "/images/bahcelik.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Gartenarbeit  ",
        rate: "4.8",
        price: "$189.25"
    },

    {
        image: "/images/evboyas.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Gipserarbeiten und Rigipswandplatten-Montage ",
        rate: "4.8",
        price: "$189.25"
    },

    {
        image: "/images/transport.jpeg",
        altName: "Sinsheim",
        location: "Sinsheim",
        p: "Transport, Umzug und Entrümpelung",
        rate: "4.8",
        price: "$189.25"
    },
]
const Services = () => {
    const [isVisible, ref] = useVisibility();

    return (
        <div className={`${styles.populardestination} page`} >
            <div className={`${styles.populardestination_section} page_section`}>
                <div className={`${styles.populardestination_section_container} page_section_container`}>
                    <div className={styles.title_div}>
                        <h2 ref={ref} className={` ${isVisible ? styles.faderight : ''}`} >
                            Unsere Dienstleistungen
                        </h2>
                    </div>
                    <div ref={ref} className={`${styles.featureIcons} ${isVisible ? styles.fade_bottom_to_top : ''}`}>
                        {icons.map((icon, idx) => {
                            return (
                                <div className={styles.featureIcon} key={idx}>
                                    <a href="#">
                                        <div className={styles.tourcard_header}>
                                            <div className={styles.tourcard_image}>
                                            <Image src={icon.image?icon.image:"/images/default.webp"} width={250} height={198} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" alt={icon.altName} />

                                            </div>

                                        </div>
                                        <div className={styles.tourcard_content}>
                                            <div className={styles.location}>
                                                <i className="fa-solid fa-location-dot"></i>
                                                {icon.location}
                                            </div>
                                            <h3 className={styles.title}>
                                                <span>{icon.p}</span>
                                            </h3>
                                            <div className={styles.tourcard_rating}>
                                                <div className={styles.stars}>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                    <div><i className="fa-solid fa-star "></i></div>
                                                </div>
                                                <span>4.8 </span>
                                            </div>

                                            <div className={styles.tourcard_bottom}>
                                                <div>
                                                    <i className={"fa-solid fa-clock"}></i>
                                                </div>
                                                <div className={styles.price}>
                                                    From <span>{icon.price}</span>
                                                </div>
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
    );
}

export default Services;
