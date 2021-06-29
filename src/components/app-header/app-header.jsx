import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/list-icon'
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/burger-icon'
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/logo'

import HeadButton from './header-button/header-button';
import styles from './app-header.module.css'

export default function AppHeader () {
  return (
    <header className={styles.head}>
      <nav className={styles.menu} style={{justifyContent: 'flex-start'}}>
        <HeadButton text={'Конструктор'}>
          <BurgerIcon  type={'primary'}/>
        </HeadButton>
        <HeadButton text={'Лента заказов'}>
          <ListIcon type={'secondary'}/>
        </HeadButton>
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.menu} style={{justifyContent: 'flex-end'}}>
        <HeadButton text={'Личный кабинет'}>
          <ProfileIcon type={'secondary'} />
        </HeadButton>
      </nav>
    </header>
  )
};