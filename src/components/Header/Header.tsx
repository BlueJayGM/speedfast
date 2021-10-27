import React from 'react';

import './styles.css';

import logoSVG from './../../assets/Logo.svg';
import btnShutdown from './../../assets/btn-shutdown.svg';

export function Header() {

  const [hover, setHover] = React.useState(false);

  return (
    <header className="HeaderContainer">
      <button  
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="btnAroundMenu">
        
        {
          hover && <span className="alert">Hi</span>
        }
      </button>
      <img id="logoSVG" src={logoSVG} alt="logo" />
      <button className="btnShutdown">
        <img src={btnShutdown} alt="shutdown" />
      </button>
    </header>
  );
}