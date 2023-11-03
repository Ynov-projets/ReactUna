import { Link, Outlet } from "react-router-dom";

import React from "react";
import logo from "../../assets/images/BigLogo.png";
import styles from "./menuLayout.module.scss";

interface Props {}
export const MenuLayout: React.FC<Props> = () => (
  <>
    <div className="bg-cackground pl-[5px] pt-[15px]" />
    <div>
      <Link to={"/"} className="block w-[270px] h-auto overflow-hidden">
        <img className="" src={logo} alt="logo" />
      </Link>
    </div>
    <div className={styles.tab}>
      <Outlet />
    </div>
  </>
);
