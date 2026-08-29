import type { Metadata } from "next";
import NotFound from "@/components/NotFound";

export const metadata: Metadata = {
  title: "404 — Abdul Manan Malik",
  description: "That page doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return <NotFound />;
}
