import "./globals.css";
import { League_Spartan } from "next/font/google";

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
  weight: ["400","500","600","700","800"],
});

export const metadata = {
  title: "room",
  description: "Furniture landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen font-body bg-white text-charcoal overflow-x-hidden ${spartan.variable}`}>{children}</body>
    </html>
  );
}

