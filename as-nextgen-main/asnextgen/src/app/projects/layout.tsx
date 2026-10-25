import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects built and in development at AS NEXTGEN Pvt Ltd.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
