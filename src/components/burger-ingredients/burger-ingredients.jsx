import { useRef, useState } from 'react'
import style from './burger-ingredients.module.css'
import Tabs from './tabs/tabs'
import Section from './section/section'
import { useSelector } from 'react-redux'

export default function BurgerIngredients() {
  const { ingredients } = useSelector((store) => store.ingredientsReducer)

  const [state, setState] = useState({
    activeTab: 'bun',
    tabs: [
      { id: 'bun', name: 'Булки', sectionRef: useRef(null) },
      { id: 'main', name: 'Начинки', sectionRef: useRef(null) },
      { id: 'sauce', name: 'Соусы', sectionRef: useRef(null) },
    ],
  })
  const tabsRef = useRef(null)

  const onTabClick = (tabName) => {
    state.tabs
    .find((tab) => tab.id === tabName)
    .sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    setState({ ...state, activeTab: tabName })
  }

  const handleScroll = () => {
    const scrollContainerPosition = tabsRef.current.getBoundingClientRect().top
    const tabsPositions = state.tabs.map((el) => {
      return {
        id: el.id,
        position:
          el.sectionRef.current.getBoundingClientRect().top -
          scrollContainerPosition,
      }
    })
    let closesTab = tabsPositions.reduce((prev, current) =>
      Math.abs(prev.position) < Math.abs(current.position) ? prev : current,
    )
    setState({ ...state, activeTab: closesTab.id })
  }
  return (
    <section className='column'>
      <h2 className={`${style.header} text text_type_main-large mt-10 mb-5`}>
        Соберите бургер
      </h2>
      <Tabs
        tabs={state.tabs}
        activeTabId={state.activeTab}
        onClick={onTabClick}
      />
      <div className='container' onScroll={handleScroll} ref={tabsRef}>
        {state.tabs.map((tab) => {
          return (
            <Section
              title={tab.name}
              items={ingredients.filter((ing) => ing.type === tab.id)}
              key={tab.id}
              ref={tab.sectionRef}
            />
          )
        })}
      </div>
    </section>
  )
}
