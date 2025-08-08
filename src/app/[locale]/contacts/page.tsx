'use client';

import React from 'react'
import dynamic from "next/dynamic";
import styles from "./contacts.module.css";
import Container from '@/components/Container/Container';
import Image from 'next/image';
import phone from "../../../../public/icon-phone-illustration.png";
import email from "../../../../public/icon-email-illustratio.png";
import address from "../../../../public/ico_address.png";
import { useTranslations } from 'next-intl';

// Динамически подключаем карту, чтобы отключить SSR
const Map = dynamic(() => import("../../../components/GoogleMap/GoogleMap"), {
  ssr: false,
});

const Contacts = () => {
  const t = useTranslations("contact"); 
  
  return (
    <div className={styles.contacts_container}>
      <Container>
        <h1 className={styles.title}>{t("title")}</h1>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src={phone}
              alt="phone"
              width={100}
              height={100}
              className={styles.tel}
            />
            <p className={styles.item_title}>{t("tel")}</p>
            <p>+38022-121-22-22</p>
          </li>
          <li className={styles.item}>
            <Image
              src={email}
              alt="email"
              width={100}
              height={100}
              className={styles.email}
            />
            <p className={styles.item_title}>{t("email")}</p>
            <p>ere brertrt rtr rtr rtrt </p>
          </li>
          <li className={styles.item}>
            <Image
              src={address}
              alt="address"
              width={80}
              height={90}
              className={styles.address}
            />
            <p className={styles.item_title}>{t("address_title")}</p>
            <p>{t("address")}</p>
          </li>
        </ul>
      </Container>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  );
}

export default Contacts;