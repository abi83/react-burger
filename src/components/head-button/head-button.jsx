import styles from './head-button.module.css';

export default function HeadButton ({children, text}) {
  return (
    <div className={styles.head}>
      {children}
      <p>{text}</p>
    </div>
  )
};