import { IBM_Plex_Mono } from "next/font/google";

const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function CvLayout({ children }) {
  return <main className={`print:bg-white ${ibm.className}`}>{children}</main>;
}
