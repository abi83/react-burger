import React from 'react';
import Logo from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo';
import './App.css';

import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from "./components/burger-constructor/burger-constructor";

function App() {
  return (
    <div className="App">
      <AppHeader title={'Hello'} logo={Logo}/>
      <main>
        <BurgerConstructor />
        <BurgerIngredients />
      </main>
    </div>
  );
}

export default App;
