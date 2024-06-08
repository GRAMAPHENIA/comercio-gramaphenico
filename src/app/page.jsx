import Post from "./components/Post";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Link from "next/link"

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  // console.log({ posts });
  return (
    <main className={styles.main}>
      <Link className="border-2 border-blue-400 px-4 py-2 mb-10 rounded-full bg-blue-400/30 text-blue-400" href={'/add-post'}>Publicar</Link>
      <h1 className="text-[48px] mb-10">PUBLICADO</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        );
      })}
    </main>
  );
}
