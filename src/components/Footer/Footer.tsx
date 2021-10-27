import React from "react";

import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <small>
        Programador por 
        <a className={styles.author} href="https://github.com/bluejaygm">@BlueJayGM</a>
        , arte por: 
        <a href="https://dribbble.com/shots/15077191-Ferrari-Superfast-813-Freebie">
          AR Shakir
        </a>
      </small>
    </footer>
  );
}