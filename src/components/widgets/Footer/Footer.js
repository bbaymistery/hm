import React from "react";
import styles from "./styles.module.scss";
const Footer = () => {
  return (
    <div className={`element_section ${styles.element_section_inside}`}>
      <div className={`section ${styles.section_inside}`}>
        <div className={`section_container ${styles.section_container_inside}`}>
          <div className={styles.boxes}>
            <div className={`${styles.box_one} ${styles.box}`}>
              <a className={styles.box_logo} href="/">
                Zuverlässiges Heimteam

              </a>
              <p className={styles.box_desc}>
                Copyright © 2024 Zuverlässiges Heimteam
              </p>
            </div>
            <div className={`${styles.box} ${styles.box_two}`}>
              <p className={styles.text_white}>Habe Fragen</p>
              <p className={styles.text_color}>
                <a href="tel:+55555555555" >Klicke um anzurufen +55555555555</a>
              </p>
              <p className={styles.text_white}>
                Engagierter Support 24/7
              </p>
            </div>
            <div className={`${styles.box} ${styles.box_three}`}>
              <p className={styles.text_white}>Mission</p>
              <p>
                <a href="mailto:info@london-heathrow.taxi" className={styles.text_color}>
                  Kundenzufriedenheit <br /> ist unsere Priorität
                </a>
              </p>

              <a href="/sitemap.xml">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
