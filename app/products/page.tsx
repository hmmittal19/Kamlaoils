import Products from "@/components/products/Products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Kamla Oil Industries",
  description:
    "Industrial fuel, recycled plastic feedstock, and petroleum products from plastic waste.",
};

export default function ProductsPage() {
  return <Products />;
}
