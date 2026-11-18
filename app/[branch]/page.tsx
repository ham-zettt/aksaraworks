import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { branches, isBranchKey } from "@/lib/content";
import { BranchPage } from "@/components/branch/BranchPage";

// The whole page (brand, accent, copy) derives from `params`, so there is no
// useful shell to stream. All four real paths are prerendered; blocking only
// affects unknown params, which end in notFound().
export const instant = false;

type BranchRouteProps = { params: Promise<{ branch: string }> };

export function generateStaticParams() {
  return Object.keys(branches).map((branch) => ({ branch }));
}

export async function generateMetadata({ params }: BranchRouteProps): Promise<Metadata> {
  const { branch: key } = await params;
  if (!isBranchKey(key)) return {};

  const branch = branches[key];
  const title = `${branch.name} — ${branch.tagline}`;

  return {
    title,
    description: branch.description,
    keywords: branch.keywords,
    alternates: { canonical: branch.path },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: branch.path,
      siteName: "AKSARA",
      title,
      description: branch.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: branch.description,
    },
  };
}

export default async function BranchRoute({ params }: BranchRouteProps) {
  const { branch: key } = await params;
  if (!isBranchKey(key)) notFound();

  return <BranchPage branch={branches[key]} />;
}
