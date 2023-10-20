import React from "react";
import styles from "./mainLayout.module.scss"

interface Props { }
export const MainLayout: React.FC<Props> = () => (
  <div className={styles.MainLayout}>
    <div className={styles.header}>
      <button className={styles.headerButton} onClick={handleLogInClick}>connexion</button>
      <button className={styles.headerButton} onClick={handleSignInClick}>inscription</button>
    </div>
    <div className={styles.logo}>
      <img src="src\assets\images\BigLogo.png" alt="Logo du jeu" />
    </div>
    <div className={styles.buttonsContainer}>
      <button className={styles.homeButton} onClick={handlePlayClick}>jouer</button> 
      <button className={styles.homeButton} onClick={handleSettingsClick}>parametres</button>
      <button className={styles.homeButton} onClick={handleQuitClick}>quitter</button>
    </div>
  </div>
);

function handleSignInClick() {
  // Gérer l'événement "INSCRIPTION" ici
}
function handleLogInClick() {
  // Gérer l'événement "CONNEXION" ici
}
function handlePlayClick() {
  // Gérer l'événement "JOUER" ici
  return (
    <div className="rectangle"></div>
  );
}
function handleSettingsClick() {
  // Gérer l'événement "PARAMÈTRES" ici
}

function handleQuitClick() {
  // Gérer l'événement "QUITTER" ici
}

