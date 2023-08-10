import style from "../styles/button.module.scss";

/**
 * @param {*} props
 * @param props.btnText // String
 * @param props.isDark // Boolean
 * @returns JSX Component Button
 */

export const Button = (props) => {
  const { btnText, isDark } = props;

  return (
    <button
      className={style.buttonStyle}
      style={
        isDark
          ? { color: "white", backgroundColor: "rgb(30,30,30)" }
          : { color: "black", backgroundColor: "rgb(230,230,230)" }
      }
    >
      {btnText}
    </button>
  );
};
