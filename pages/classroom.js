import Head from "next/head";
import Link from "next/link";
import ClassLayout from "../components/class/ClassLayout";
import Moment from "react-moment";
import { createClient } from "contentful";
import Header from "../components/Header";

const Classroom = ({ posts }) => {
  return (
    <>
      <Head>
        <title>BeatCoding 비트코딩</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Header title="Classroom" isClass />

        <ClassLayout title="오늘 수업" isRoot>
          {posts.map((post) => (
            <div key={post.sys.id}>
              {post.fields.main ? (
                <article key={post.sys.id} className="flex flex-col">
                  <div className="mb-2 flex flex-row justify-start items-center">
                    <div className="mr-auto">
                      <div>
                        <Link
                          href={"/classroom/[slug]"}
                          as={`/classroom/${post.fields.slug}`}
                        >
                          <a className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800 hover:underline cursor-pointer">
                            {post.fields.title}
                          </a>
                        </Link>
                      </div>
                      <div className="pb-3">
                        <p className="text-gray-700 font-light text-sm md:text-lg">
                          <Moment key={post.sys.id} format="YYYY년 MM월 DD일">
                            {post.fields.updated}
                          </Moment>
                        </p>
                      </div>
                    </div>
                    <Link
                      href={"/classroom/[slug]"}
                      as={`/classroom/${post.fields.slug}`}
                    >
                      <button className="bg-btc_start hover:bg-btc_end text-white rounded-full transform hover:scale-110 transition duration-250 ease-in-out">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                  <hr />
                </article>
              ) : (
                <span></span>
              )}
            </div>
          ))}
        </ClassLayout>

        <ClassLayout title="모든 수업" isRoot>
          {posts.map((post) => (
            <article key={post.sys.id} className="flex flex-col">
              <div className="mb-2 flex flex-row justify-start items-center">
                <div className="mr-auto">
                  <div>
                    <Link
                      href={"/classroom/[slug]"}
                      as={`/classroom/${post.fields.slug}`}
                    >
                      <a className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800 hover:underline cursor-pointer">
                        {post.fields.title}
                      </a>
                    </Link>
                  </div>
                  <div className="pb-3">
                    <p className="text-gray-700 font-light text-sm md:text-lg">
                      <Moment format="YYYY년 MM월 DD일">
                        {post.fields.updated}
                      </Moment>
                      {/* {post.fields.updated.slice(0, 10)} */}
                    </p>
                  </div>
                </div>
                <Link
                  href={"/classroom/[slug]"}
                  as={`/classroom/${post.fields.slug}`}
                >
                  <button className="bg-blue-500 hover:bg-btc_end text-white rounded-full transform hover:scale-110 transition duration-250 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <hr />

              <div className="mb-10"></div>
            </article>
          ))}
        </ClassLayout>
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
