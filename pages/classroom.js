import Head from "next/head";
import Link from "next/link";

// import fs from "fs";
// import matter from "gray-matter";
import Layout from "../components/class/Layout";

import { createClient } from "contentful";

const Classroom = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>BeatCoding 비트코딩</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Layout>
          {posts.map((post) => (
            // <div key={post.sys.id}>{post.fields.title}</div>
            <article key={post.sys.id} className="pb-5">
              <header>
                <Link
                  href={"/classroom/[slug]"}
                  as={`/classroom/${post.fields.slug}`}
                >
                  <a className="text-3xl font-bold tracking-wide no-underline">
                    {post.fields.title}
                  </a>
                </Link>
              </header>
              <section>
                <p className="text-gray-700 font-light text-lg">
                  {post.fields.updated}
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
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "class" });

  return {
    props: {
      posts: res.items,
    },
    revalidate: 1,
  };
}

export default Classroom;

// =========== Git based Method ===========
// export async function getStaticProps() {
//   const files = fs.readdirSync(`${process.cwd()}/contents/classes`);

//   const posts = files.map((filename) => {
//     const markdownWithMetadata = fs
//       .readFileSync(`contents/classes/${filename}`)
//       .toString();

//     const { data } = matter(markdownWithMetadata);

//     const frontmatter = {
//       ...data,
//     };

//     return {
//       slug: filename.replace(".md", ""),
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       posts,
//     },
//   };
// }
