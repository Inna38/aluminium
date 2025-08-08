import { products } from "../../../../../public/json_products/json";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Продукт не знайдено",
    };
  }

  return {
    title: `${product.title} — алюминиевый сплав | `,  
    description: product.description,
    openGraph: {
      title: `${product.title} — алюминиевый сплав`,
      description: product.description,
      images: [
        {
          url: typeof product.img === "string" ? product.img : product.img.src,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | `,
      description: product.description,
      images: [typeof product.img === "string" ? product.img : product.img.src],
    },
  };
}
