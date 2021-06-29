import React from 'react';

import './app.css';

import { data } from '../utils/data'
import AppHeader from './app-header/app-header';
import BurgerIngredients from './burger-ingredients/burger-ingredients';
import BurgerConstructor from "./burger-constructor/burger-constructor";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <BurgerIngredients ingredients={ data }/>
        <BurgerConstructor ingredients={ data } />
      </main>
    </div>
  );
}

export default App;
