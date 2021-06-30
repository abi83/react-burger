import React, {useEffect} from 'react';

import './app.css';

import AppHeader from './app-header/app-header';
import BurgerIngredients from './burger-ingredients/burger-ingredients';
import BurgerConstructor from "./burger-constructor/burger-constructor";

const APIUrl = 'https://norma.nomoreparties.space/api/ingredients'

function App() {
  const[data, setData] = React.useState({
    ingredients: [],
    serverErrors: false,
    loading: true
  })

  const getIngredients = () => {
    fetch(APIUrl)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setData({...data, ingredients: result.data, loading: false})
      })
      .catch(() => setData({...data, loading: false, serverErrors: true}))
  }

  useEffect(getIngredients,[])

  return (
    <div className="App">
      <AppHeader />
      <main>
        {data.loading || data.serverErrors
          ? data.loading
            ? <div className='message'>Данные загружаются</div>
            : <div className='message'>Ошибка сервера</div>
          : <>
              <BurgerIngredients ingredients={ data.ingredients } />
              <BurgerConstructor ingredients={ data.ingredients } />
            </>}
      </main>
    </div>
  )
}

export default App;
