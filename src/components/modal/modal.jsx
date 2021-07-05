import styles from './modal.module.css'
import React, {useEffect} from 'react';
import closeIcon from '../../images/close-icon.png'

export default function Modal({ close, children}) {
  const closeOnEscape = (e) => {
    if (e.keyCode===27) {
      close()
    }}
  
  useEffect(()=>{
    document.body.addEventListener('keydown', closeOnEscape);
    
    return ()=>document.body.removeEventListener('keydown', closeOnEscape)
  }, [])
  
  
  return (
    <div onClick={e=>e.stopPropagation()} className={`${styles.modal} p-10`}>
      <img src={closeIcon} className={styles.close} onClick={close} alt='Закрыть'/>
      {children}
    </div>
  )
}