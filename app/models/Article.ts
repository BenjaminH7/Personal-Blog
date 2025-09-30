import Auteur from "./Auteur";

export default class Article {
    #id: number;
    #title: string;
    #content: string;
    #author: Auteur;
    #publishedAt: Date | null;

    constructor(id: number, title: string, content: string, author: Auteur, publishedAt: Date | null = null) {
        this.#id = id;
        if (!title.trim()) throw new Error("le titre doit être rempli");
        this.#title = title;

        if (content.trim().length < 10) throw new Error("le contenu est trop court")
        this.#content = content;
        this.#author = author;
        this.#publishedAt = publishedAt;
    }
    getAuthor() {
        return this.#author;
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