import style from "../styles/navigation.module.scss";

export const Navigation = () => {
  const navItems = [
    { route: "HJEM" },
    { route: "KONCEPTER" },
    { route: "UTM_LOYALTY" },
    { route: "OM" },
    { route: "KONTAKT" },
  ];

  return (
    <nav className={style.navStyle}>
      <div>
        {navItems.map((item, i) => {
          return <a key={i}>{item.route}</a>;
        })}
      </div>
    </nav>
  );
};
