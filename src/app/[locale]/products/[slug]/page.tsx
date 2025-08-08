import Image from "next/image";
import { products } from "../../../../../public/json_products/json";
import ProductCard from "@/components/ProductCard/ProductCard";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductDetails({ params }: { params: any }) {
   const { slug } = params;    
    
  const product = products.find((p) => p.slug === slug);

  if (!product) return <div>Продукт не знайдено</div>;

   return <ProductCard productProps={product} />;
}
