import React from "react";
import styles from "./menuLayout.module.scss"
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/images/BigLogo.png"

interface Props { }
export const MenuLayout: React.FC<Props> = () => (
  <div className={styles.container}/*bg-cackground pl-[5px] pt-[15px] */>
    <div>
      <Link to={"/"} className={styles.logo}/* block w-[270px] h-auto overflow-hidden*/>
        <img src={logo} alt="logo" /*className="w-full h-auto"*//>
      </Link>
    </div>
    <div className={styles.tab}>
      <Outlet/>
    </div>
  </div>
);