import Article from "./models/Article";
const article = new Article(1, 'Mon titre', 'Lorem Ispum Dolor Lorem Ispum Dolor  Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor Lorem Ispum Dolor', 123);

export default function Home() {
  return (
    <div>
      {article.getTitle()}
      <br />
      {article.getSummary()}
    </div>
  );
}
