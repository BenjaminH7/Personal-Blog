
import Link from "next/link";

import { blog } from "./data/seed";



export default function Home() {
  const posts = blog.list();
  return (
    <main>
      <h1>Articles</h1>
      <br />
      <ul>
        {posts.map((p) => (
          <li key={p.getId()}>
            <br />
            <Link href={`/posts/${p.getId()}`}><h2>{p.getTitle()}</h2></Link>
            <p>{p.getSummary()}</p>
          </li>
        ))}
      </ul>
    </main >
  );
}
