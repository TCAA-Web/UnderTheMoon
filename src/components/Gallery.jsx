import style from "../styles/gallery.module.scss";

export const Gallery = (props) => {
  const { imageArray } = props;

  return (
    <section className={style.imageGalleryStyle}>
      {imageArray.map((item, index) => {
        return <img key={index} src={item}></img>;
      })}
    </section>
  );
};
