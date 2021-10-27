import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ListIcons } from './components/ListIcons/ListIcons';
import { Title } from './components/Title/Title';



function App() {
  return (
    <div className="App">
      <Header/>
      <Title/>
      <ListIcons/>
      <Footer/>
    </div>
  );
}

export default App;