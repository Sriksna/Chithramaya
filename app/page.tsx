import { SplitScreen } from "@/components/gatekeeper/SplitScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Chithramaya",
  },
  description: "Enter the dual worlds of Chithramaya (Precision Offsite) and Thalam (Human Onsite). Select your experience.",
};

export default function Home() {
  return <SplitScreen />;
}
