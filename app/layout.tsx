import "./globals.css";
import type { Metadata } from "next";
import { type ReactNode } from "react"
import Header from "./components/Header";
import { Providers } from "./provider"

export const metadata: Metadata = {
  title: "FundMe App",
  description: "A crowdfunding App",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
