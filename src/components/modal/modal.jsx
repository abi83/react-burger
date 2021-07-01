import styles from './modal.module.css'

export default function Modal(props) {
  const { children, header, onClose } = props;
  
  return (
    <div className={styles.modal}>
      <h3>{header}</h3>
      {children}
    </div>
  )
    // <div className={styles.modal}>
    //   <h3 onClose={onClose}>{header}</h3>
    //   {children}
    // </div>
}