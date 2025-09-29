export default class Auteur {
    #id: number;
    #nom: string;
    #bio: string;
    #email: string;

    constructor(id: number, nom: string, bio: string, email: string) {
        this.#id = id;
        this.#nom = nom;
        this.#bio = bio;
        this.#email = email;
    }

}