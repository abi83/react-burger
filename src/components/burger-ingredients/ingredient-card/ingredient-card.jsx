// import HeadButton from '../head-button/head-button';
import styles from './ingredient-card.module.css'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function AppHeader ({ingredient}) {
  return (
    <div className={styles.card}>
      <img className={styles.mainImage} src={ingredient.image_large} alt={ingredient.name}/>
      <div className={styles.price}>
        <span>
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.name}>
        {ingredient.name}
      </p>
    </div>
  )
};