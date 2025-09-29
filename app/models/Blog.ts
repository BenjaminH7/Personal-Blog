import Article from "./Article";

export default class Blog {
    #posts: Article[] = [];


    add(post: Article) {
        this.#posts.push(post);
    }

    list() {
        return [...this.#posts];
    }
    findById(id: number) {
        return this.#posts.find(p => p.getId() === id) ?? null
    }
}