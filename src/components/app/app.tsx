import React, {useEffect} from 'react';

import './app.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import ModalOverlay from "../modal-overlay/modal-overlay";

const APIUrl = 'https://norma.nomoreparties.space/api/ingredients'

export default function App() {
  const[data, setData] = React.useState({
    ingredients: [],
    serverErrors: false,
    loading: true
  })
  const[modal, manageModal] = React.useState(false)


  const getIngredients = () => {
    fetch(APIUrl)
      .then(response => response.json())
      .then(result => {
        setData({...data, ingredients: result.data, loading: false})
      })
      .catch(() => setData({...data, loading: false, serverErrors: true}))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getIngredients,[])

  return (
    <>
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
      {
        modal &&
            <ModalOverlay>
              <Modal>Привет</Modal>
            </ModalOverlay>
      }

    </>
  )
};