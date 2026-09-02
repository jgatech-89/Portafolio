import { Inter } from "next/font/google";

// Inter es la única tipografía de interfaz según el manual de marca
// (10-manual): Space Grotesk queda reservado exclusivamente al wordmark del
// logo, que ya viaja convertido a curvas dentro de los SVG.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
