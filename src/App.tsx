import React from 'react';
import styles from './App.module.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ListIcons } from './components/ListIcons/ListIcons';
import { Title } from './components/Title/Title';



function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Title/>
      <ListIcons/>
      <Footer/>
    </div>
  );
}

export default App;