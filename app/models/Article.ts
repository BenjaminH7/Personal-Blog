import { error } from "console";

export default class Article {
    #id: number;
    #title: string;
    #content: string;
    #authorId: number;
    #publishedAt: Date | null;

    constructor(id: number, title: string, content: string, authorId: number, publishedAt: Date | null = null) {
        this.#id = id;
        if (!title) throw new Error("le titre doit être rempli");
        this.#title = title;

        if (content.length < 10) throw new Error("le contenu est trop court")
        this.#content = content;
        this.#authorId = authorId;
        this.#publishedAt = publishedAt;
    }

    getId() {
        return this.#id;

    }
    getTitle() {
        return this.#title;
    }

    getContent() {
        return this.#content;
    }

    getSummary(max: number) {
        return this.#content.length > max ?
            this.#content.slice(0, max) + "..."
            : this.#content;
    }
}