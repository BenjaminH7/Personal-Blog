import Link from "next/link";

import { blog } from "./data/seed";


export default function Home() {
  const posts = blog.list();
  return (
    <main className="m-10">
      <h1 className="font-elegant text-4xl tracking-tight italic md:text-3xl px-2">Articles</h1>
      <br />
      <ul>
        {posts.map((p) => (
          <article key={p.getId()} className="p-2 hover:bg-black/10 block rounded-md transition-colors flex flex-col justify-center min-h-20">
            <li>
              <Link href={`/posts/${p.getId()}`}>
                <h3 className="font-semibold">{p.getTitle()}</h3>
              </Link>
              <p>{p.getSummary(20)}</p>
            </li>
          </article>

        ))}
      </ul>
    </main >
  );
}