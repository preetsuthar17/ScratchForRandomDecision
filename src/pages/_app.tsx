import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Decision Maker",
  description: "Scratch Card to Reveal a Random Decision",
};

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
