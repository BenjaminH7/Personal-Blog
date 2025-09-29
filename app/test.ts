import Article from "./models/Article";

const article = new Article(1, "Titre", "Contenu", 123);
console.log(article.title);