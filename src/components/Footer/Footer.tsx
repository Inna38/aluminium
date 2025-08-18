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
import time from "../../../public/10723279.png";
import telegram from "../../../public/social/Telegram_2019_Logo.svg.webp";
import whatsapp from "../../../public/social/png-transparent-whatsapp-icon-whatsapp-computer-icons-symbol-text-messaging-whats-logo-grass-mobile-phones.png";
import viber from "../../../public/social/3938039.png";



const Footer = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.container}>
          {/* Column 1 — Logo + about */}
          <div className={`${styles.column} ${styles.column_info}`}>
            <Image
              src=""
              alt="logo"
              width={160}
              height={50}
              className={styles.logo}
            />
            <p className={styles.about}>
              {locale === "ua"
                ? "Металообробка та виробництво на замовлення"
                : "Metalworking & custom production"}
            </p>
            <div className={styles.work_container}>
              <Image src={time} alt="time" width={40} height={40} />
              {locale === "ua" ? (
                <p>
                  <span>Понеділок - П&lsquo;ятниця</span>
                  <br />
                  <span> з 9.00 до 20.00</span>
                </p>
              ) : (
                <p>
                  <span> Monday - Friday </span> <br />
                  <span> from 9:00 to 20:00</span>
                </p>
              )}
            </div>
          </div>

          {/* Column 2 — Contacts */}
          <div
            className={`${styles.column} ${styles.item} ${styles.column_contacts}`}
          >
            <h4>{locale === "ua" ? "Контакти" : "Contacts"}</h4>
            <div className={styles.contact}>
              <Image
                src={phone}
                alt="phone"
                width={30}
                height={30}
                className={styles.tel}
              />
              <a href="tel:+380977786507" target="blank">
                +38(097)778-65-07
              </a>
            </div>
            <div className={styles.contact}>
              <Image
                src={email}
                alt="email"
                width={30}
                height={30}
                className={styles.email}
              />
              <a
                href="mailto:dimaglagolev2008@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                dimaglagolev2008@gmail.com
              </a>
            </div>

            {/* Column 4 — Socials */}
            <div className={`${styles.column} ${styles.column_social}`}>
              <h4>{locale === "ua" ? "Соцмережі" : "Social"}</h4>
              <div className={styles.socials}>
                <a href="https://t.me/+380977786507" target="blank">
                  <Image src={telegram} alt="telegram" width={32} height={32} />
                </a>
                <a href="viber://chat?number=+380977786507" target="blank">
                  <Image src={viber} alt="viber" width={32} height={32} />
                </a>
                <a href="https://wa.me/380977786507" target="blank">
                  <Image src={whatsapp} alt="whatsapp" width={32} height={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 — Navigation */}
          <div className={`${styles.column} ${styles.navigation}`}>
            <h4>{locale === "ua" ? "Сторінки" : "Pages"}</h4>
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
      <div className={styles.bottom}>
        <Container>
          <p>© {new Date().getFullYear()} Alefmet. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
