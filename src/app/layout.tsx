import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Neverthought",
    template: "%s | Neverthought",
  },
  description:
    "The admissibility layer for the deployment economy. Learn deployment judgement before it becomes irreversible.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-nt-bg text-nt-body antialiased">{children}</body>
    </html>
  );
}
