import React from "react";

import styles from './styles.module.css';

type Icon = {
  image: string;
  name: string;
  state: string;
}

export function Icon({image, name, state} : Icon) {
  return (
    <div className={styles.Icon}>
      <img src={image} alt={name} />
      <span id={styles.name}>{name}</span>
      <span id={styles.state}>{state}</span>
    </div>
  );
}