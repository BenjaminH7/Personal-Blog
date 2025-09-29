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

    getTitle() {
        return this.#title;
    }
    getSummary() {
        const summary = this.#content.slice(0, 200) + "...";
        return summary;
    }
}