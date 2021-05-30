import React from "react";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/class/Layout";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default function Post({ post }) {
  return (
    <>
      <div className="flex flex-col">
        <Layout>
          <article>
            {/* <ReactMarkdown children={post.fields.content} /> */}
            {post.fields.title}
          </article>
        </Layout>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "class",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "class",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/classroom",
        permanent: false,
      },
    };
  }

  return {
    props: { post: items[0] },
    revalidate: 1,
  };
};

// export async function getStaticPaths() {
//   const files = fs.readdirSync("contents/classes");

//   const paths = files.map((filename) => ({
//     params: {
//       slug: filename.replace(".md", ""),
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const markdownWithMetadata = fs
//     .readFileSync(path.join("contents/classes", slug + ".md"))
//     .toString();

//   const { data, content } = matter(markdownWithMetadata);

//   const frontmatter = {
//     ...data,
//   };

//   return {
//     props: {
//       content: `# ${data.title}\n${content}`,
//       frontmatter,
//     },
//   };
// }
