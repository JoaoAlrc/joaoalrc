import "./globals.css";

import { Architects_Daughter } from "next/font/google";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "João Victor Alarcão Pereira",
  description: "3D Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={architectsDaughter.className}>{children}</body>
    </html>
  );
}
