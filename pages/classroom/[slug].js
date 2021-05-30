import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/class/Layout";

export default function Post({ content, frontmatter }) {
  return (
    <>
      <div className="flex flex-col">
        <Layout>
          <article>
            <ReactMarkdown children={content} />
          </article>
        </Layout>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("contents/classes");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("contents/classes", slug + ".md"))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const frontmatter = {
    ...data,
  };

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
    },
  };
}
