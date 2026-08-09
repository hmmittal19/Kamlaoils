import Contact from "@/components/contact/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kamla Oil Industries",
  description:
    "Plant: F-584, UPSIDC Industrial Area, Hapur. Phone 9911500087. Email kamlaoils01@gmail.com",
};

export default function ContactPage() {
  return <Contact />;
}
