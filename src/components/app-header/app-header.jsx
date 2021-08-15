import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import HeadButton from './header-button/header-button';
import styles from './app-header.module.css';

export default function AppHeader () {
  return (
    <header className={styles.head}>
      <nav className={`${styles.menu} ${styles.menuLeft}`}>
        <HeadButton text='Конструктор'>
          <BurgerIcon  type='primary'/>
        </HeadButton>
        <HeadButton text='Лента заказов'>
          <ListIcon type='secondary'/>
        </HeadButton>
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={`${styles.menu} ${styles.menuRight}`}>
        <a href={'/profile/'} className='resetted-link'>
          <HeadButton text='Личный кабинет'>
            <ProfileIcon type='secondary' />
          </HeadButton>
        </a>
      </nav>
    </header>
  )
};