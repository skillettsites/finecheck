import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { BLOG_POSTS } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Parking Fine Advice & Guides",
  description:
    "Expert guides on UK parking fines, appeals, and your rights. Covering council fines, private parking charges, the new Code of Practice, and how to win your appeal.",
  alternates: {
    canonical: "https://finecheck.co.uk/blog",
  },
  openGraph: {
    title: "Parking Fine Advice & Guides | FineCheck",
    description:
      "Expert guides on UK parking fines, appeals, and your rights.",
    url: "https://finecheck.co.uk/blog",
    type: "website",
  },
};

const categoryVariants: Record<string, "info" | "success" | "warning" | "danger" | "accent" | "default"> = {
  "Private Parking": "danger",
  "Guides": "info",
  "Data & Research": "success",
  "Legal": "warning",
};

function estimateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}

export default function BlogIndexPage() {
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  const featuredPost = sortedPosts[0];
  const otherPosts = sortedPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-12 sm:py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Parking Fine Advice & Guides
            </h1>
            <p className="text-lg text-slate-300">
              Expert, no-nonsense guides to help you understand your rights and appeal your parking fine.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          {/* Featured Post */}
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="block rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition-shadow mb-10"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-6 sm:p-8">
              <Badge variant={categoryVariants[featuredPost.category] || "default"}>
                {featuredPost.category}
              </Badge>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-3 mb-2">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-3">
                {featuredPost.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <time dateTime={featuredPost.publishedDate}>
                  {new Date(featuredPost.publishedDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{estimateReadTime(featuredPost.content)} min read</span>
              </div>
            </div>
          </Link>

          {/* Other Posts Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <Badge
                  variant={categoryVariants[post.category] || "default"}
                  className="self-start mb-3"
                >
                  {post.category}
                </Badge>
                <h2 className="text-lg font-bold text-gray-900 mb-2 flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{post.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{estimateReadTime(post.content)} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 bg-slate-900">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-3">
              Need Help With Your Parking Fine?
            </h2>
            <p className="text-slate-300 mb-6">
              Our free tool checks your fine, assesses your chances, and generates a professional appeal letter.
            </p>
            <Link
              href="/appeal"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white hover:bg-teal-700 transition-colors shadow-sm"
            >
              Start Your Appeal
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
