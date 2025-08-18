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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            corrupti iure nostrum saepe animi itaque, quasi ab labore,
            repellendus exercitationem molestias ex quis adipisci, ipsam
            excepturi nobis doloribus similique! Saepe debitis, fugit sint sunt
            at officiis. Nostrum cumque architecto saepe a, ad consectetur
            laborum, explicabo voluptatum dignissimos veniam unde! Nam voluptate
            fugit cumque, officiis repellendus recusandae hic veniam, corporis,
            possimus ea omnis? Accusantium explicabo asperiores commodi iste
            minima totam blanditiis, dolore eveniet tenetur. Est neque sunt
            quasi atque incidunt nam id perspiciatis animi et quidem voluptates
            consequatur tempore placeat, repudiandae vero accusamus dolorem ad
            mollitia quod voluptas blanditiis! Cum doloribus tempore a nihil
            iusto adipisci quaerat, numquam sint temporibus molestiae
            repellendus, cupiditate dolorum minima nobis earum enim. Accusantium
            minus, officiis labore inventore hic delectus voluptatem ad. Enim
            laborum voluptatibus ratione dolore qui. Eveniet laudantium non
            officia natus nulla! Corporis quis cupiditate ex dolore quas ipsam
            voluptatum dignissimos dicta incidunt! Provident facilis aliquid
            itaque soluta corrupti! Sed eveniet magni deleniti repellat
            quibusdam temporibus, voluptate esse dicta id architecto aut
            blanditiis laborum porro reiciendis quis quidem aperiam praesentium
            reprehenderit error asperiores at. Commodi inventore soluta
            doloremque at, molestias ab maiores, expedita odio nulla iure
            recusandae quisquam illum architecto assumenda accusantium laborum
            atque!
          </p>
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