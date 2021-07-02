import styles from './modal.module.css'
import React from 'react';
import closeIcon from '../../images/close-icon.png'

export default function Modal({ close, children, header}) {
  return (
    <div onClick={e=>e.stopPropagation()} className={styles.modal}>
      <img src={closeIcon} className={styles.close} onClick={close}/>
      <h3>{header}</h3>
      {children}
    </div>
  )
    // <div className={styles.modal}>
    //   <h3 onClose={onClose}>{header}</h3>
    //   {children}
    // </div>
}