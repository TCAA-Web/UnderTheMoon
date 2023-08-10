import style from "../styles/ContentSection.module.scss";
import { Button } from "./Button";

export const ContentSection = (props) => {
  const { title, isDark, bgImage } = props;

  return (
    <section
      className={!isDark ? style.contentSectionLight : style.contentSectionDark}
      style={{ backgroundImage: "url(" + bgImage + ")" }}
    >
      <h3>{title}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente unde
        sit animi quisquam necessitatibus numquam aspernatur commodi ad,
        voluptate libero est ipsa ea non iure adipisci. Porro quis fugit est!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <Button btnText={"LÆS MERE"} isDark={isDark} />
    </section>
  );
};