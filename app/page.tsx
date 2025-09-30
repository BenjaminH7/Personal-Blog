
import Link from "next/link";

import { blog } from "./data/seed";



export default function Home() {
  const posts = blog.list();
  return (
    <main>
      <h1>Articles</h1>
      <h2>Il y a {blog.count()} articles</h2>

      <br />
      <ul>
        {posts.map((p) => (
          <li key={p.getId()}>
            <br />
            <Link href={`/posts/${p.getId()}`}><h3>{p.getTitle()}</h3></Link>
            <p>{p.getSummary(20)}</p>
          </li>
        ))}
      </ul>
    </main >
  );
}
