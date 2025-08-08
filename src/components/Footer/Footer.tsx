"use client";

import React from "react";
import Container from "../Container/Container";
import styles from "./footer.module.css";
import Image from "next/image";
import phone from "../../../public/ico_phone.svg";
import email from "../../../public/ico_mail.svg";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { usePathname } from "next/navigation";

const Footer = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  
  return (
    <footer className={styles.footer_container}>
      <Container>
        <div className={styles.container}>
          <div>
            <Image
              src=""
              alt="logo"
              width={160}
              height={50}
              className={styles.logo}
            />
            <div className={styles.work_container}>
              {locale === "ua" ? (
                <p>
                  <span> Графік роботи </span> <br />
                  <span>Понеділок - П&lsquo;ятниця</span> <br />
                  <span> з 9.00 до 20.00</span>
                </p>
              ) : (
                <p>
                  <span>Working hours</span> <br />
                  <span> Monday - Friday </span> <br />
                  <span> from 9:00 to 20:00</span>
                </p>
              )}

              <ul>
                <li className={styles.item}>
                  <a href="tel:+380" className={styles.contact}>
                    <Image
                      src={phone}
                      alt="phone"
                      width={30}
                      height={30}
                      className={styles.tel}
                    />
                    <span> +3802543453543453</span>
                  </a>
                </li>

                <li className={styles.item}>
                  <a href="mailto:" className={styles.contact}>
                    <Image
                      src={email}
                      alt="email"
                      width={30}
                      height={30}
                      className={styles.email}
                    />
                    <span> jkjkhjk@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p>social link</p>
          </div>

          <div>
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
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
