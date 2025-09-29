export default class Article {
    #id: number;
    #title: string;
    #content: string;
    #authorId: number;
    #publishedAt: Date | null;

    constructor(id: number, title: string, content: string, authorId: number, publishedAt: Date | null = null) {
        this.#id = id;
        this.#title = title;
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
    getSummary() {
        return this.#content.length > 200 ?
            this.#content.slice(0, 200) + "..."
            : this.#content;
    }
}