'use client'

import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
import Image from 'next/image';
import Link from "next/link";
import React, { useState } from 'react'

import styles from "./header.module.css"
import Container from '../Container/Container';
import { useWindowWidth } from '@/hooks/useWindowWidth.tsx';
import BannerSection from '../BannerSection/BannerSection';
import { usePathname } from 'next/navigation';


const Header = () => {
  const width = useWindowWidth()

  const t = useTranslations("nav");
  
  const locale = useLocale();
const pathname = usePathname();


  return (
    <>
      <header className={styles.header_container}>
        <Container>
          <div className={styles.header_content}>
            <div>
              <Image
                src=""
                alt="logo"
                width={160}
                height={50}
                className={styles.logo}
              />
            </div>
            <nav>
              <ul className={styles.nav}>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/`}
                    className={`${
                      pathname === `/${locale}` ? styles.active : ""
                    }`}
                  >
                    {t("home")}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/production`}
                    className={`${
                      pathname === `/${locale}/production` ? styles.active : ""
                    }`}
                  >
                    {t("production")}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/products`}
                    className={`${
                      pathname === `/${locale}/products` ? styles.active : ""
                    }`}
                  >
                    {t("products")}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/quality`}
                    className={`${
                      pathname === `/${locale}/quality` ? styles.active : ""
                    }`}
                  >
                    {t("quality")}
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    href={`/${locale}/contacts`}
                    className={`${
                      pathname === `/${locale}/contacts` ? styles.active : ""
                    }`}
                  >
                    {t("contacts")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header