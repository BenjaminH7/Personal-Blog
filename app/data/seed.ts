import Blog from "../models/Blog";
import Article from "../models/Article";
import Auteur from "../models/Auteur";

export const blog = new Blog();


const marie = new Auteur(1, "Marie", "Bio courte", "marie@exemple.fr");
blog.add(new Article(1, "Bienvenue sur ce blog", "Lorem Ispum Dolor ", marie, new Date(2023, 11, 12)));
blog.add(new Article(2, "Mon titre 2", "Deuxième article ", marie, new Date(2023, 11, 12)));
blog.add(new Article(3, "Troisième", "Encore un contenu ", marie, new Date(2023, 11, 12)));

