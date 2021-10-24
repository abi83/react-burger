import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components'

import HeadButton from './header-button/header-button'
import styles from './app-header.module.css'

export default function AppHeader() {
  return (
    <header className={styles.head}>
      <nav className={`${styles.menu} ${styles.menuLeft}`}>
        <HeadButton text='Конструктор' link='/'>
          <BurgerIcon type='primary' />
        </HeadButton>
        <HeadButton text='Лента заказов' link='/'>
          <ListIcon type='secondary' />
        </HeadButton>
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={`${styles.menu} ${styles.menuRight}`}>
        <HeadButton text='Личный кабинет' link='/profile/'>
          <ProfileIcon type='secondary' />
        </HeadButton>
      </nav>
    </header>
  )
}
