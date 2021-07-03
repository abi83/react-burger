import {useState, useRef} from 'react';
import style from './burger-ingredients.module.css';
import Tabs from './tabs/tabs';
import PropTypes from 'prop-types';
import {ingredientPropTypes} from '../../utils/dataPropTypes';
import Section from './section/section';

export default function BurgerIngredients ({ingredients, onClick}) {
  const [state, setState] = useState({
      activeTab: 'bun',
      tabs: [
        {id: 'bun', name: 'Булки', sectionRef: useRef(null)},
        {id: 'main', name: 'Начинки', sectionRef: useRef(null)},
        {id: 'sauce', name: 'Соусы', sectionRef: useRef(null)},
      ]
    })
  const onTabClick = (tabName) => {
    state.tabs
      .find(tab => tab.id === tabName)
      .sectionRef.current
      .scrollIntoView({ behavior: 'smooth' })
    setState({...state, activeTab: tabName})
  }
  return (
    <section className='column'>
      <h2 className={`${style.header} text text_type_main-large mt-10 mb-5`}>Соберите бургер</h2>
      <Tabs tabs={state.tabs} activeTabId={state.activeTab} onClick={onTabClick} />
      <div className="container">
        {state.tabs
          .map( (tab) => {
            return <Section title={tab.name}
                   items={ingredients.filter(ing=>ing.type===tab.id)}
                   key={tab.id}
                   ref={tab.sectionRef}
                   onClick={onClick} />})}
      </div>
    </section>
  )
}

BurgerIngredients.propTypes = PropTypes.arrayOf(ingredientPropTypes).isRequired;