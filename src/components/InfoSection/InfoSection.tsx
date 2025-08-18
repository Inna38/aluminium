"use client";

import React, { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import language from "../../../public/lang.svg";
import telegram from "../../../public/social/Telegram_2019_Logo.svg.webp";
import whatsapp from "../../../public/social/png-transparent-whatsapp-icon-whatsapp-computer-icons-symbol-text-messaging-whats-logo-grass-mobile-phones.png";
import viber from "../../../public/social/3938039.png";
import address from "../../../public/ico_address.png";
import burger from "../../../public/burger.png";
import burger_close from "../../../public/burger_close.png";

import styles from "./infoSection.module.css"
import Container from "../Container/Container";
import { useWindowWidth } from "@/hooks/useWindowWidth.tsx";
import Link from "next/link";

const InfoSection = () => {
  const t = useTranslations("nav");
  const tContact = useTranslations("contact");
  const local = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const width = useWindowWidth();

  const menuRef = useRef<HTMLDivElement>(null);
  const [changeLang, setChangeLang] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);


useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      burgerMenu &&
      menuRef.current &&
      !menuRef.current.contains(event.target as Node)
    ) {
      setBurgerMenu(false);
    }
  };

  document.addEventListener("click", handleClickOutside);
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [burgerMenu]);
  
  
  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length > 0) {
      segments[0] = newLocale;
    } else {
      segments.push(newLocale);
    }

    const newPathname = "/" + segments.join("/");

    router.push(newPathname);
  };
  return (
    <div
      className={`${styles.infoSection_container} ${
        burgerMenu && styles.overlay
      }`}
    >
      {width < 950 ? (
        <p>
          <Container>
            <ul className={styles.mobile_list}>
              <li className={styles.mobile_item}>
                <Image
                  src={burger}
                  alt="menu_burger"
                  width={35}
                  height={35}
                  className={styles.burger}
                  onClick={() => setBurgerMenu((prev) => !prev)}
                />
              </li>

              <li>
                <Image
                  src=""
                  alt="logo"
                  width={160}
                  height={50}
                  className={styles.logo}
                />
              </li>
              {/* {width > 764 && ( */}
              <li
                onClick={() => setChangeLang((prev) => !prev)}
                className={styles.lang_container}
              >
                <Image
                  src={language}
                  alt="language"
                  width={50}
                  height={50}
                  className={styles.icon_lang}
                />
                <span className={styles.title_lang}>
                  {local === "ua" ? "Українська" : "English"}
                </span>
                {changeLang && (
                  <div className={styles.changeLang_container}>
                    <ul>
                      <li>
                        <button
                          className={styles.btn}
                          onClick={() => changeLanguage("ua")}
                        >
                          Українська
                        </button>
                      </li>
                      <li>
                        <button
                          className={styles.btn}
                          onClick={() => changeLanguage("en")}
                        >
                          English
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* )} */}
            </ul>
          </Container>

          <div
            ref={menuRef}
            className={`${styles.mobile_container} ${
              burgerMenu ? styles.active : ""
            }`}
          >
            <Container>
              <Image
                src={burger_close}
                alt="menu_burger"
                width={35}
                height={35}
                className={styles.burger_close}
                onClick={() => setBurgerMenu((prev) => !prev)}
              />
              <nav>
                <ul className={styles.nav}>
                  <li className={styles.item}>
                    <Link
                      href={`/${local}/`}
                      className={`${
                        pathname === `/${local}` ? styles.active : ""
                      }`}
                      onClick={() =>
                        burgerMenu && setBurgerMenu((prev) => !prev)
                      }
                    >
                      {t("home")}
                    </Link>
                  </li>
                  <li className={styles.item}>
                    <Link
                      href={`/${local}/production`}
                      className={`${
                        pathname === `/${local}/production` ? styles.active : ""
                      }`}
                      onClick={() =>
                        burgerMenu && setBurgerMenu((prev) => !prev)
                      }
                    >
                      {t("production")}
                    </Link>
                  </li>
                  <li className={styles.item}>
                    <Link
                      href={`/${local}/products`}
                      className={`${
                        pathname === `/${local}/products` ? styles.active : ""
                      }`}
                      onClick={() =>
                        burgerMenu && setBurgerMenu((prev) => !prev)
                      }
                    >
                      {t("products")}
                    </Link>
                  </li>
                  <li className={styles.item}>
                    <Link
                      href={`/${local}/quality`}
                      className={`${
                        pathname === `/${local}/quality` ? styles.active : ""
                      }`}
                      onClick={() =>
                        burgerMenu && setBurgerMenu((prev) => !prev)
                      }
                    >
                      {t("quality")}
                    </Link>
                  </li>
                  <li className={styles.item}>
                    <Link
                      href={`/${local}/contacts`}
                      className={`${
                        pathname === `/${local}/contacts` ? styles.active : ""
                      }`}
                      onClick={() =>
                        burgerMenu && setBurgerMenu((prev) => !prev)
                      }
                    >
                      {t("contacts")}
                    </Link>
                  </li>

                  <li className={`${styles.item} ${styles.item_footer}`}>
                    <a
                      href={`/${local}/contacts#map`}
                      className={styles.address_container}
                    >
                      <Image
                        src={address}
                        alt="telegram"
                        width={30}
                        height={35}
                      />
                      <p>
                        вул. Короленка, Кам’янське, Дніпропетровська область
                      </p>
                    </a>
                  </li>

                  <li className={styles.item}>
                    <ul className={styles.list}>
                      <li className={`${styles.item} ${styles.list}`}>
                        <a href="https://t.me/+380977786507" target="blank">
                          <Image
                            src={telegram}
                            alt="telegram"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a
                          href="viber://chat?number=+380977786507"
                          target="blank"
                        >
                          <Image
                            src={viber}
                            alt="viber"
                            width={32}
                            height={32}
                          />
                        </a>
                        <a href="https://wa.me/380977786507" target="blank">
                          <Image
                            src={whatsapp}
                            alt="whatsapp"
                            width={32}
                            height={32}
                          />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* {width < 765 && (
                <ul className={styles.mobile_list}>
                  <li
                    onClick={() => setChangeLang((prev) => !prev)}
                    className={styles.language_container}
                  >
                    <Image
                      src={language}
                      alt="language"
                      width={50}
                      height={50}
                      className={styles.icon_lang}
                    />
                    <span className={styles.title_lang}>
                      {local === "ua" ? "Українська" : "English"}
                    </span>
                    {changeLang && (
                      <div className={styles.changeLang_container}>
                        <ul>
                          <li>
                            <button
                              className={styles.btn}
                              onClick={() => changeLanguage("ua")}
                            >
                              Українська
                            </button>
                          </li>
                          <li>
                            <button
                              className={styles.btn}
                              onClick={() => changeLanguage("en")}
                            >
                              English
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              )} */}
            </Container>
          </div>
        </p>
      ) : (
        <Container>
          <ul className={styles.list_container}>
            <li className={styles.item}>
              <a
                href={`/${local}/contacts#map`}
                className={styles.address_container}
              >
                <Image src={address} alt="telegram" width={30} height={35} />
                <p>{tContact("address")}</p>
              </a>
            </li>

            <li className={styles.item}>
              <ul className={styles.list}>
                <li className={`${styles.item} ${styles.list}`}>
                  <a href="https://t.me/+380977786507" target="blank">
                    <Image
                      src={telegram}
                      alt="telegram"
                      width={32}
                      height={32}
                    />
                  </a>
                  <a href="viber://chat?number=+380977786507" target="blank">
                    <Image src={viber} alt="viber" width={32} height={32} />
                  </a>
                  <a href="https://wa.me/380977786507" target="blank">
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      width={32}
                      height={32}
                    />
                  </a>
                </li>
                <li
                  className={styles.lang_container}
                  onClick={() => setChangeLang((prev) => !prev)}
                >
                  <Image
                    src={language}
                    alt="language"
                    width={50}
                    height={50}
                    className={styles.icon_lang}
                  />
                  <span className={styles.title_lang}>
                    {local === "ua" ? "Українська" : "English"}
                  </span>
                  {changeLang && (
                    <div className={styles.changeLang_container}>
                      <ul>
                        <li>
                          <button
                            className={styles.btn}
                            onClick={() => changeLanguage("ua")}
                          >
                            Українська
                          </button>
                        </li>
                        <li>
                          <button
                            className={styles.btn}
                            onClick={() => changeLanguage("en")}
                          >
                            English
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </li>
          </ul>
        </Container>
      )}
    </div>
  );
};

export default InfoSection;
