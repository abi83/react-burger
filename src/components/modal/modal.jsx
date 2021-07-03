import styles from './modal.module.css'
import React from 'react';
import closeIcon from '../../images/close-icon.png'

export default function Modal({ close, children}) {
  return (
    <div onClick={e=>e.stopPropagation()} className={styles.modal}>
      <img src={closeIcon} className={styles.close} onClick={close}/>
      {children}
    </div>
  )
}