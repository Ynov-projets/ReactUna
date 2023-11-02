import React from "react";
import styles from "./ParameterMenu.module.scss";

interface Props { }

export const ParameterMenu: React.FC<Props> = () => (
  <div className={styles.parameter}>
    <div className={styles.mode}>
      MODE
      <div className={styles.mode__buttons}>
        <button>NORMAL</button>
        <button>REVERSE</button>
      </div>
    </div>
    <div className={styles.volume}>
      VOLUME
    </div>
    <div className={styles.close}>
      <button>FERMER</button>
    </div>
  </div>
);