"use client";

import Container from "@/components/Container/Container";
import { useLocale } from "next-intl";
import Image from "next/image";
import { products } from "../../../../public/json_products/json";
import zoom  from "../../../../public/zoom.png";
import styles from "./products.module.css";
import Link from "next/link";
import { useState } from "react";


export default function ProductsPage() {
  const local = useLocale();

  const [isOpen, setIsOpen] = useState(false);
    const [activeImage, setActiveImage] = useState<string | null>(null);

    const handleImageClick = (img: string) => {
      setActiveImage(img);
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
      setActiveImage(null);
    };
  
  return (
    <div className={styles.productsPage_container}>
      <Container>
        <ul className={styles.list}>
          {products.map(({ img, title, slug }) => (
            <li key={title} className={styles.item}>
              <div
                className={styles.imageWrapper}
                onClick={() => handleImageClick(img as unknown as string)}
              >
                <Image
                  src={img}
                  alt={title}
                  width={300}
                  height={300}
                  className={styles.img}
                />
                <div className={styles.zoomIcon}>
                  <Image
                    src={zoom}
                    alt="zoom"
                    width={20}
                    height={20}
                    className={styles.img}
                  />
                </div>
                {/* <div className={styles.tooltip}>Нажмите для увеличения</div> */}
              </div>

              <div className={styles.info}>
                <p className={styles.item_descr}>{title}</p>
                <Link
                  href={`/${local}/products/${slug}`}
                  className={styles.button}
                >
                  {local === "ua" ? "Детальніше" : "More details"}
                </Link>
              </div>
            </li>
            // <li
            //   key={title}
            //   className={styles.item}
            //   style={{ cursor: "zoom-in" }}
            // >
            //   <div className={styles.imageWrapper}>
            //     <Image
            //       src={img}
            //       alt={title}
            //       width={300}
            //       height={300}
            //       className={styles.img}
            //       onClick={() => handleImageClick(img as unknown as string)}
            //     />
            //   </div>
            //   <div className={styles.info}>
            //     <p className={styles.item_descr}>{title}</p>

            //     <Link
            //       href={`/${local}/products/${slug}`}
            //       className={styles.button}
            //     >
            //       {local === "ua" ? "Детальніше" : "More details"}
            //     </Link>
            //   </div>
            // </li>
          ))}
        </ul>
      </Container>
      {isOpen && activeImage && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <Image
            src={activeImage}
            alt="Zoomed image"
            width={800}
            height={800}
            className={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
}
