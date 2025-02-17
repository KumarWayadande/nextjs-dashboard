// import { inter } from "./ui/fonts";

import "@/app/ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
    </html>
  );
}
