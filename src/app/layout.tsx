import { Navbar } from "@/app/components/ui/Navbar";
import { Footer } from "@/app/components/sections/Footer";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Debord Company || Porfolio personal de Mario Sanz",
  description:
    "Portfolio personal que he ido ampliando con funcionalidades para desarrollo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`print:bg-white  ${ibm.className} bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50`}
      >
        <Navbar />
        <main className="max-w-5xl px-8 min-h-[80dvh] m-auto print:bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
