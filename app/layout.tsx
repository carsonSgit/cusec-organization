import type { Metadata } from "next";
import { EB_Garamond, Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-karla",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CUSEC",
  description:
    "Canadian University Software Engineering Conference, a student-run technology conference founded in 2002.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${karla.variable} ${ebGaramond.variable}`}>
      <body>
        <div className="cusec-paper-surface">
          <div className="cusec-paper-overlay" />
          {children}
        </div>
      </body>
    </html>
  );
}
