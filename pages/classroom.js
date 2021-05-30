import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/class/Layout";

const Classroom = ({ posts }) => {
  return (
    <>
      <Head>
        <title>BeatCoding 비트코딩</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Layout>
          {posts.map(({ frontmatter: { title, description, date }, slug }) => (
            <article key={title} className="pb-5">
              <header>
                {/* <span>수정일: {updatedAt}</span> */}
                <Link href={"/classroom/[slug]"} as={`/classroom/${slug}`}>
                  <a className="text-3xl font-bold tracking-wide no-underline">
                    {title}
                  </a>
                </Link>
              </header>
              <section>
                <p className="text-gray-700 font-light text-lg">
                  {description}
                </p>
              </section>
            </article>
          ))}
        </Layout>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/contents/classes`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`contents/classes/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const frontmatter = {
      ...data,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Classroom;
