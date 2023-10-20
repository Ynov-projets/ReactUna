import React from "react";
import styles from "./menuLayout.module.scss"
import { Link, Outlet } from "react-router-dom";

interface Props { }
export const MenuLayout: React.FC<Props> = () => (
  <div className={styles.container}>
    <div>
      <Link to={"/"} className={styles.logo}></Link>
    </div>
    <div className={styles.tab}>
      <Outlet/>
    </div>
  </div>
);