"use client";

import { useTranslations } from "next-intl";
import Head from "next/head";
import Image from "next/image";

import styles from "./production.module.css"
import Container from "@/components/Container/Container";

export default function Production() {
  const t = useTranslations();
  return (
    <>
      <Head>
        <title>Виробництво | Компанія Алюмінію</title>
        <meta
          name="description"
          content="Дізнайтесь про наше сучасне виробництво алюмінію: етапи, обладнання, стандарти якості та відео з виробництва."
        />
      </Head>

      <Container>
        <main className={styles.production_container}>
          <section className={styles.hero}>
            <h1>Наше виробництво</h1>
            <p>
              Сучасні технології, автоматизація процесів і контроль якості на
              кожному етапі.
            </p>
            <div className={styles.bannerImage}>
              <Image
                src=""
                alt="Виробництво алюмінію"
                width={1200}
                height={500}
                priority
                className={styles.img}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Етапи виробництва</h2>
            <div className={styles.processImages}>
              <Image
                src=""
                alt="Сировина"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src=""
                alt="Плавка"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src=""
                alt="Лиття"
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
            <ul className={styles.steps}>
              <li>Прийом і перевірка сировини</li>
              <li>Плавка в індукційних печах</li>
              <li>Лиття та формування</li>
              <li>Охолодження та обробка</li>
              <li>Контроль якості</li>
              <li>Упаковка і логістика</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Обладнання</h2>
            <p>
              Використовуємо високоточне обладнання від провідних виробників.
            </p>
            <div className={styles.gallery}>
              <Image
                src="/images/equipment1.jpg"
                alt="Обладнання 1"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src="/images/equipment2.jpg"
                alt="Обладнання 2"
                width={400}
                height={250}
                className={styles.img}
              />
              <Image
                src="/images/equipment3.jpg"
                alt="Обладнання 3"
                width={400}
                height={250}
                className={styles.img}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Схема виробничого процесу</h2>
            <div className={styles.processChart}>
              <Image
                src=""
                alt="Схема виробничого циклу"
                width={1000}
                height={400}
                className={styles.img}
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2>Відео з виробництва</h2>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Відео виробництва"
                allowFullScreen
              ></iframe>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
