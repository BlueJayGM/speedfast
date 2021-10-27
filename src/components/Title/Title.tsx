import React from 'react';

import './styles.css';

import carPNG from './../../assets/car.png';

export function Title() {
  return (
    <section className="Title">
      <h1>SUPERFAST</h1>
      <h2>812</h2>
      <img src={carPNG} alt="car" />
    </section>
  );
}