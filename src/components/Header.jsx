import headerbg from "../assets/header.jpg";
import style from "../styles/header.module.scss";
export const Header = () => {
  return (
    <>
      <header
        className={style.headerStyle}
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <h1>UNDER THE MOON</h1>
        <section>
          <h2>HAIRSTYLIST OG FRISØR</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fugit
            esse earum dolor? Voluptatem cumque enim possimus necessitatibus
            dolore hic ullam, ab nostrum temporibus doloribus fugiat fugit,
            cupiditate est consectetur?
          </p>
        </section>
      </header>
    </>
  );
};
