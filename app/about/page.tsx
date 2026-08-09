import AboutUs from "@/components/about/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Kamla Oil Industries",
  description:
    "Biomass oil refinery in Hapur, Uttar Pradesh. Incorporated December 2023.",
};

export default function AboutPage() {
  return <AboutUs />;
}
