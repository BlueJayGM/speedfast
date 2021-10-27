import React from 'react';

import styles from './styles.module.css';

import carPNG from './../../assets/car.png';

export function Title() {
  return (
    <section className={styles.Title}>
      <h1>SUPERFAST</h1>
      <h2>812</h2>
      <img src={carPNG} alt="car" />
    </section>
  );
}