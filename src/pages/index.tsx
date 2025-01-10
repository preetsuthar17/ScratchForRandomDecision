import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";

import DecisionMaker from "@/components/DecisionMaker";

export const metadata: Metadata = {
  title: "Random Decision Maker",
  description: "Scratch Card to Reveal a Random Decision",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${dmSans.variable}  font-[family-name:var(--font-dm-sans)]`}
    >
      <DecisionMaker />
    </div>
  );
}
