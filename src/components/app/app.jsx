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
  const[data, setData] = React.useState({
    ingredients: [],
    serverErrors: false,
    loading: true
  })
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
    // blank function to add or remove item from selectedIngredients.
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
  
  const [selectedIngredients, selectedIngredientsDispatcher] = useReducer(selectedIngredientsReducer, data.ingredients, undefined);


  const getIngredients = () => {
    fetch(APIUrl)
      .then(response => response.json())
      .then(result => {
      console.log('result');
        setData({...data, ingredients: result.data, loading: false})
      })
      .catch(() => setData({...data, loading: false, serverErrors: true}))
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getIngredients,[] )
  useEffect(()=>{
    selectedIngredientsDispatcher({type: 'set', value: data.ingredients})
    console.log('effect',data);
  }, [data])

  return (
    <>
      <div className={styles.app}>
        <AppHeader />
        <main>
          {data.loading || data.serverErrors
            ? data.loading
              ? <div className='message'>Данные загружаются</div>
              : <div className='message'>Ошибка сервера</div>
            : <>
                <BurgerIngredients ingredients={ data.ingredients } onClick={handleCardClick}/>
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