import React, {useEffect, useReducer} from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Modal from '../modal/modal';
import ModalIngredient from '../modal/modal-ingredient/modal-ingredient';
import ModalOrderInfo from '../modal/modal-order-info/modal-order-info';
import {ConstructorContext} from '../../context/constructor-context'

const APIUrl = 'https://norma.nomoreparties.space/api/ingredients'

export default function App() {
  const[serverState, setServerState] = React.useState({
    serverErrors: false,
    loading: true
  })
  const [ingredients, setIngredients] = React.useState([])
  
  const[modal, manageModal] = React.useState({isOpened:false, content: ''})

  const handleModalClose = () => {
    manageModal({...modal, isOpened: false})
  }

  const handleCardClick = (ingredient) => {
    // @ts-ignore
    manageModal({isOpened: true, content: <ModalIngredient ingredient={ingredient} />})
  }
  const handleOrderClick = () => {
    const order = {number: '0345376'}
    // @ts-ignore
    manageModal({isOpened: true, content: <ModalOrderInfo order={order} />})
  }
  
  function selectedIngredientsReducer(state, action){
    // blank function to add or remove items from selectedIngredients.
    // bun validation is here!
    switch (action.type) {
      case 'set':
        return action.value
      case 'add':
        return {state};
      case 'delete':
        return {state};
      default:
        throw new Error();
    }
  }
  
  const [selectedIngredients, selectedIngredientsDispatcher] = useReducer(selectedIngredientsReducer, ingredients, undefined);


  const getIngredients = () => {
    fetch(APIUrl)
      .then(response => response.json())
      .then(result => {
        setIngredients(result.data);
        setServerState({loading: false, serverErrors: false})
      })
      .catch(() => setServerState({loading: false, serverErrors: true}))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getIngredients,[] )
  useEffect(()=>{
    selectedIngredientsDispatcher({type: 'set', value: ingredients})
  }, [ingredients])

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <main>
          {serverState.loading || serverState.serverErrors
            ? serverState.loading
              ? <div className='message'>Данные загружаются</div>
              : <div className='message'>Ошибка сервера</div>
            : <>
                <BurgerIngredients ingredients={ ingredients } onClick={handleCardClick}/>
                <ConstructorContext.Provider value={{selectedIngredients, selectedIngredientsDispatcher}}>
                  <BurgerConstructor onClick={handleOrderClick}/>
                </ConstructorContext.Provider>
              </>}
        </main>
      </div>
      {
        modal.isOpened &&
          <Modal close={handleModalClose}>{modal.content}</Modal>
      }

    </>
  )
}