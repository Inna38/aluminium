import React from 'react'
import Container from '../Container/Container'

import delivery from "../../../public/imgonline-com-ua-Replace-color-WMjFfTpgAnv.jpg"

import styles from "./AboutPage.module.css"
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const AboutPage = () => {
     const t = useTranslations("about");
  return (
    <div className={styles.about_container}>
      <Container>
        <div className={styles.content}>
          <section className={`${styles.intro} ${styles.section}`}>
            <p>
              ТОВ «Алефмет» — Алюміній, що працює на результат. <br /> Надійний
              партнер для промисловості Ми не просто переплавляємо метал — ми
              створюємо якісну сировину для сильних брендів, які щодня рухають
              світ уперед.
            </p>
            <p>
              ТОВ «Алефмет» — це сучасне підприємство, що спеціалізується на
              виробництві вторинних алюмінієвих сплавів для промислового
              використання.
            </p>
          </section>

          <section className={`${styles.industries} ${styles.section}`}>
            <p>
              Наша продукція — основа надійності у машинобудуванні,
              автомобільній промисловості, будівництві та електротехніці.
            </p>
          </section>

          <section className={`${styles.features} ${styles.section}`}>
            <h3 className={styles.title}>
              🚀 Ми допомагаємо бізнесу масштабуватись
            </h3>
            <ul className={styles.list}>
              <li>
                &ensp; Власні плавильні комплекси потужністю 1000+ тонн/місяць
              </li>
              <li>&ensp;Виробництво під індивідуальні технічні вимоги</li>
              <li>&ensp; Продукція у форматі зливків і гранул різних фракцій</li>
              <li>&ensp;
                Повна відповідність міжнародним стандартам: EN, ISO, ASTM.
                {/* <p>
                  Ми постачаємо не просто метал — ми постачаємо результат, який
                  відповідає вашим очікуванням по хімічному складу, якості,
                  термінам і упаковці.
                </p> */}
              </li>
            </ul>
          </section>

          <section className={`${styles.ecology} ${styles.section}`}>
            <h3 className={styles.title}>♻️ Екологія — частина нашої ДНК</h3>
            <p>
              Наш процес переробки вторинного алюмінію — це не лише
              ефективність, а й відповідальність. Ми зменшуємо викиди CO₂,
              зберігаємо ресурси та допомагаємо партнерам реалізовувати
              стратегії сталого розвитку (ESG).
            </p>
          </section>

          <section className={`${styles.international} ${styles.section}`}>
            <h3 className={styles.title}>🌐 Міжнародний фокус</h3>
            <p>
              ТОВ «Алефмет» працює з клієнтами з країн ЄС, Близького Сходу та
              Азії. Ми знаємо, що таке логістика без стресу, повний пакет
              експортної документації, гнучкі умови контрактів і надійні
              терміни.
            </p>
          </section>

          <section className={`${styles.partners} ${styles.section}`}>
            <h3 className={styles.title}>
              🤝 Долучайтеся до партнерства. Ми відкриті до співпраці з:
            </h3>
            <ul className={styles.list}>
              <li>&ensp;Заводами та промисловими підприємствами</li>
              <li>&ensp;Міжнародними закупівельниками</li>
              <li>&ensp;Металотрейдерами</li>
              <li>&ensp;Контрактними виробниками та експортерами</li>
            </ul>
          </section>

          <section className={`${styles.benefits} ${styles.section}`}>
            <h3 className={styles.title}>
              🔧 Ми — ваші люди, якщо вам потрібно:
            </h3>
            <ul className={styles.list}>
              <li>&ensp;Якісно</li>
              <li>&ensp;Швидко</li>
              <li>&ensp;З гарантією</li>
              <li>&ensp;Без зайвого клопоту</li>
            </ul>
          </section>
        </div>
      </Container>
      <div className={styles.img_container}>
        <Image
          src={delivery}
          alt="delivery"
          // width={100}
          // height={50}
          //   fill
          className={styles.img}
        />
        <div className={styles.content_container}>
          <p className={styles.img_content}>{t("export")}</p>
          <p className={styles.img_content_decr}>{t("title")}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage