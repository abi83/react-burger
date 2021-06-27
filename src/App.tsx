import React from 'react';
import Logo from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo';
import './App.css';

import { data } from './utils/data'
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import BurgerConstructor from "./components/burger-constructor/burger-constructor";

function App() {
  return (
    <div className="App">
      <AppHeader logo={Logo}/>
      <main>
        {/*TODO: propTypes */}
        <BurgerIngredients ingredients={ data }/>
        <BurgerConstructor ingredients={ data } />
      </main>
    </div>
  );
}

export default App;
