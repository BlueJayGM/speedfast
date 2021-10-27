import React from 'react';

import styles from './styles.module.css';

import logoSVG from './../../assets/Logo.svg';
import btnShutdown from './../../assets/btn-shutdown.svg';

export function Header() {

  const [hover, setHover] = React.useState(false);

  return (
    <header className={styles.container}>
      <button  
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={styles.btnAroundMenu}>
        
        {
          hover && <span className={styles.alert}>Hi</span>
        }
      </button>
      <img id={styles.logoSVG} src={logoSVG} alt="logo" />
      <button className={styles.btnShutdown}>
        <img src={btnShutdown} alt="shutdown" />
      </button>
    </header>
  );
}