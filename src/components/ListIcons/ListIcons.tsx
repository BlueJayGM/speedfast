import React from "react";

import styles from './styles.module.css';

import { Icon } from "../Icon/Icon";

import icons from '../../assets/icons.json';

export function ListIcons() {
  return (
    <section className={styles.ListIcons}>
      {
        icons.map((icon) => {
          return (
            <Icon key={icon.name} image={icon.image} name={icon.name} state={icon.state}/>
          );
        })
      }
    </section>
  );
}