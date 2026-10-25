import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Open roles and internships at AS NEXTGEN Pvt Ltd. Browse positions and apply.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
