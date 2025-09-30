import Link from "next/link";
import { notFound } from "next/navigation";
import { blog } from "@/app/data/seed";

export default function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const post = blog.findById(id);
    if (!post) return notFound();

    return (
        <div>
            <Link href="/"><h1>Accueil</h1></Link>

            <h3>{post.getTitle()}</h3>
            <p>{post.getContent()}</p>
            <p> Ecrit par {post.getAuthor().getName()}</p>        </div>
    );
}