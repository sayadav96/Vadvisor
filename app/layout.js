import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsappButton";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "VAdvisor",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="qr_vHlGUTH5sTR44FCYevfd-aIQU0IaCODp4w-CWq6k"
      />
      <GoogleTagManager gtmId="GTM-T9Z3GT2J" />
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId="GTM-T9Z3GT2J" />
    </html>
  );
}
