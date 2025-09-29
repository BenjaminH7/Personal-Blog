import Blog from "../models/Blog";
import Article from "../models/Article";


export const blog = new Blog();
blog.add(new Article(1, "Mon titre", "Lorem Ispum Dolor ".repeat(30), 123));
blog.add(new Article(2, "Mon titre 2", "Deuxième article ", 123));
blog.add(new Article(3, "Troisième", "Encore un contenu ", 456));