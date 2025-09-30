import Article from "./Article";
export default class Blog {
    #posts: Article[] = [];


    add(post: Article) {
        if (this.#posts.some(p => p.getId() === post.getId())) {
            throw new Error("ID d'article déjà utilisé");
        }
        this.#posts.push(post);
    }

    list() {
        return [...this.#posts];
    }
    findById(id: number) {
        return this.#posts.find(p => p.getId() === id) ?? null
    }
    count() {
        return this.#posts.length
    }
    findByTitle(q: string) {
        return this.#posts.filter(
            p => p.getTitle().toLowerCase().includes(q.toLowerCase())
        )
    }
}