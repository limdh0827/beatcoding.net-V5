import React from "react";
import { useRouter } from "next/router";
import ClassLayout from "../../components/class/ClassLayout";
import { createClient } from "contentful";
import Header from "../../components/Header";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const codebox = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={okaidia}
        language={match[1]}
        PreTag="div"
        children={String(children).replace(/\n$/, "")}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default function Post({ post }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const { title, md, main } = post.fields;
  return (
    <>
      <Header title="Classroom" isClass />
      <div className="flex flex-col">
        {main ? (
          <ClassLayout title={title} isToday>
            <article className="markdown_body">
              <ReactMarkdown
                remarkPlugins={[gfm]}
                children={md}
                components={codebox}
              />
            </article>
          </ClassLayout>
        ) : (
          <ClassLayout title={title}>
            <article className="markdown_body">
              <ReactMarkdown
                remarkPlugins={[gfm]}
                children={md}
                components={codebox}
              />
            </article>
          </ClassLayout>
        )}
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "class",
  });

  const paths = res.items.map((item) => {
    const slug = item.fields.slug;
    return {
      params: { slug },
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
      notFound: true,
    };
  }

  const post = items[0];

  return {
    props: { post },
    revalidate: 1,
  };
};
