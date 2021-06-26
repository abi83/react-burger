import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'
import Logo from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader title={'Hello'} logo={Logo}/>
      <BurgerIngredients />
    </div>
  );
}

export default App;
