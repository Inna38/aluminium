"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import language from "../../../public/lang.svg";

import styles from "./infoSection.module.css"
import Container from "../Container/Container";

const InfoSection = () => {
  const local = useLocale();

  const router = useRouter();
  const pathname = usePathname();

    const [changeLang, setChangeLang] = useState(false);

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
    <div className={styles.infoSection_container}>
      <Container>
        <ul className={styles.list_container}>
          <li className={styles.item}>
            <p>address</p>
          </li>

          <li
            className={styles.item}
            onClick={() => setChangeLang((prev) => !prev)}
          >
            <ul className={styles.list}>
              <li className={`${styles.item} ${styles.list}`}>
                <Image
                  src=""
                  alt=""
                  width={25}
                  height={25}
                  className={styles.icon}
                />

                <Image
                  src=""
                  alt=""
                  width={25}
                  height={25}
                  className={styles.icon}
                />
              </li>
              <div className={styles.lang_container}>
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
              </div>
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
            </ul>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default InfoSection;
