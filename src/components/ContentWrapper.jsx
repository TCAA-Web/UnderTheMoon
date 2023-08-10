import style from "../styles/contentWrapper.module.scss";

export const ContentWrapper = (props) => {
  return <div className={style.contentWrapper}>{props.children}</div>;
};
