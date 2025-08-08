import React from 'react'
import Container from '../Container/Container'

import styles from "./BannerSection.module.css"
import { useTranslations } from 'next-intl';

const BannerSection = () => {
    const t = useTranslations();
  return (
    <>
      <div className={styles.banner_container}>
        <Container>
          <h1 className={styles.banner_title}>Aluminium</h1>
          <h2 className={styles.banner_content}>{t("banner_content")}</h2>
        </Container>
      </div>
    </>
  );
}

export default BannerSection