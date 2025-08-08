"use client";

// import { useEffect, useState } from "react";
// import Navigation from "../Navigation/Navigation";
// import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container/Container";
import ArrowCorner from "./ArrowCorner";

import styles from "./Page404.module.css";


export default function Page404() {
  //   const t = useTranslations("page404");
  //   const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth <= 743);
  //     };

  //     handleResize();

  //     window.addEventListener("resize", handleResize);

  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.mainBox}>
          <div className={styles.main}>
            <h1 className={styles.title}>404</h1>
            {/* <p className={styles.descr}>{t("description1")}</p>
            <p className={styles.descr}>{t("description2")}</p> */}
          </div>
          <div className={styles.imgBox}>
            <Image
              src="/images/img404.png"
              alt="404 Illustration"
              //   width={isMobile ? 328 : 1150}
              //   height={isMobile ? 147 : 426}
              className={styles.img}
              priority
            />
            <Link className={styles.btn} href="/">
              {/* <span className={styles.btnText}>{t("toMainPage")}</span> */}
              <ArrowCorner color="#f5ffff" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
