import style from "../styles/seperator.module.scss";

export const SeperatorWithText = (props) => {
  return <h3 className={style.seperatorStyle}>{props.text}</h3>;
};
