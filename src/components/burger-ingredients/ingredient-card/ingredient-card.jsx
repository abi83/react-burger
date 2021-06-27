// import HeadButton from '../head-button/head-button';
import styles from './ingredient-card.module.css'

export default function AppHeader ({ingredient}) {
  return (
    <div className={styles.card}>
      {ingredient.name}
    </div>
  )
};