"use client";
import "./styles/globals.scss";
import { Inter } from "next/font/google";
import Head from "next/head";
import Providers from "./Providers";
import Sidebar from "./components/Sidebar";

import { useRouter, usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const pathLogin = "/auth/login";
  const pathRegister = "/auth/register";
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {pathname !== pathLogin && <Sidebar />}
          {children}
        </Providers>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
      </body>
    </html>
  );
}
