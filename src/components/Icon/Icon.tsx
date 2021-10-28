import React from "react";

import './styles.css';

export type Icon = {
  image: string;
  name: string;
  state: string;
}

export function Icon({image, name, state} : Icon) {
  return (
    <div className="Icon">
      <img src={image} alt={name} />
      <span id="name">{name}</span>
      <span id="state">{state}</span>
    </div>
  );
}