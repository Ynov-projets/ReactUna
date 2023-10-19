import React from "react";
import { Link } from "react-router-dom";
import styles from "./mainLayout.module.scss"

interface Props { }
export const MainLayout: React.FC<Props> = () => (
  <div className={styles.MainLayout}>
    Hello Main
    <Link to={"/game"}>game</Link>
  </div>
);