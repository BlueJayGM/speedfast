import React from "react";

import './styles.css';

import { Icon } from "../Icon/Icon";

import icons from '../../assets/icons.json';

import iconsSVG from '../../assets/Icons';

export function ListIcons() {
  console.log(iconsSVG['orange']);

  return (
    <section className="ListIcons">
      {
        icons.map((icon) => {
          const image = iconsSVG[icon.image];
          return (
            <Icon key={icon.name} image={image} name={icon.name} state={icon.state}/>
          );
        })
      }
    </section>
  );
}