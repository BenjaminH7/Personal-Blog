import Link from "next/link";
import { notFound } from "next/navigation";
import { blog } from "@/app/data/seed";

export default function Page({ params }: { params: { id: string } }) {
    const id = Number(params.id);
    const post = blog.findById(id);
    if (!post) return notFound();

    return (
        <div className="p-2">
            <h1 className="px-2 font-elegant text-4xl tracking-tight italic md:text-3xl px-2">{post.getTitle()}</h1>
            <p className="px-2">{post.getContent()}</p>
            <p className="px-2"> Ecrit par {post.getAuthor().getName()}</p>
        </div >
    );
}