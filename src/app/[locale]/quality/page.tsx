import React from 'react'

import img1 from "../../../../public/production/photo_2025-08-13_20-32-10.jpg";

import styles from './quality.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Container from '@/components/Container/Container';

 function QualityPage() {
  return (
    <>
      <Head>
        <title>Якість продукції | Компанія Алюмінію</title>
        <meta
          name="description"
          content="Дізнайтесь, як ми контролюємо якість алюмінієвої продукції на кожному етапі виробництва — від сировини до пакування."
        />
      </Head>

      <Container>
        <main className={styles.qualityPage_container}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroText}>
              <h1>Контроль якості продукції</h1>
              <p>
                Ми гарантуємо надійну якість кожної партії алюмінію завдяки
                строгому контролю та міжнародним стандартам.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src=""
                alt="Контроль якості"
                width={1200}
                height={500}
                priority
                className={styles.img}
              />
            </div>
          </section>

          {/* Етапи контролю */}
          <section className={styles.section}>
            <h2>Контроль на кожному етапі</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <Image
                  src={img1}
                  alt="Вхідний контроль"
                  width={400}
                  height={250}
                  className={styles.img}
                />
                <h3>Вхідний контроль сировини</h3>
                <p>
                  Перевірка на домішки, хімічний аналіз та верифікація
                  документів.
                </p>
              </div>
              <div className={styles.step}>
                <Image
                  src=""
                  alt="Лабораторія"
                  width={400}
                  height={250}
                  className={styles.img}
                />
                <h3>Контроль у виробництві</h3>
                <p>
                  Автоматизований моніторинг температури та тестування проб.
                </p>
              </div>
              <div className={styles.step}>
                <Image
                  src=""
                  alt="Пакування"
                  width={400}
                  height={250}
                  className={styles.img}
                />
                <h3>Вихідний контроль та пакування</h3>
                <p>Фінальні випробування та захисне пакування з маркуванням.</p>
              </div>
            </div>
          </section>

          {/* Сертифікація */}
          <section className={styles.section}>
            <h2>Міжнародна сертифікація</h2>
            <p>Наша продукція відповідає стандартам якості та безпеки:</p>
            <ul className={styles.certList}>
              <li>ISO 9001 — Система управління якістю</li>
              <li>ISO 14001 — Екологічний менеджмент</li>
              <li>RoHS / REACH — відповідність для експорту в ЄС</li>
            </ul>
            <div className={styles.certImages}>
              <Image
                src=""
                alt="Сертифікат ISO 9001"
                width={350}
                height={250}
                className={styles.img}
              />
              <Image
                src=""
                alt="Сертифікат ISO 14001"
                width={350}
                height={250}
                className={styles.img}
              />
            </div>
          </section>

          {/* Лабораторія */}
          <section className={styles.section}>
            <h2>Власна лабораторія</h2>
            <p>
              Оснащена сучасним обладнанням: спектрометри, твердоміри, розривні
              машини, мікроскопи.
            </p>
            <Image
              src=""
              alt="Лабораторія компанії"
              width={1000}
              height={400}
              className={styles.img}
            />
          </section>

          {/* Завершення */}
          <section className={styles.section}>
            <h2>Нам довіряють</h2>
            <ul className={styles.advantages}>
              <li>1000+ перевірених партій</li>
              {/* <li>Рівень рекламацій < 1%</li> */}
              <li>Доступ до протоколів контролю якості</li>
            </ul>
          </section>
        </main>
      </Container>
    </>
  );
}

export default QualityPage;