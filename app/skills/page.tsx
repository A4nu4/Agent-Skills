import Link from "next/link";
import { prisma } from "@/lib/prisma";

/**
 * Skills Gallery - ISR (Incremental Static Regeneration)
 * Revalidates every 60 seconds for fresh content
 */
export const revalidate = 60;

export const metadata = {
  title: "Browse Skills | Agent Skills Manager",
  description: "Explore public AI agent skills created by the community",
};

// async function getPublicSkills() {
//   const skills = await prisma.skill.findMany({
//     where: { isPublic: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//     orderBy: { createdAt: "desc" },
//   });
//   return skills;
// }

export default async function SkillsPage() {
  // const skills = await getPublicSkills();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Public Skills Gallery</h1>
          <p className="text-base-content/70 mt-2">
            This page uses ISR - revalidates every 60 seconds
          </p>
        </div>
        <div className="badge badge-secondary badge-lg">ISR: 60s</div>
      </div>

      <div className="text-center py-16">
        <div className="text-6xl mb-4">📭</div>
        <h2 className="text-xl font-semibold mb-2">No skills yet</h2>
        <p className="text-base-content/70 mb-4">
          Be the first to create a skill!
        </p>
        <Link href="/register" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  );
}
