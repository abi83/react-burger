import styles from './modal.module.css'
import { useEffect } from 'react'
import closeIcon from '../../images/close-icon.png'
import ModalOverlay from './modal-overlay/modal-overlay'

export default function Modal({ close, children }) {
  const closeOnEscape = (e) => {
    if (e.keyCode === 27) {
      close()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscape)

    return () => document.body.removeEventListener('keydown', closeOnEscape)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ModalOverlay close={close}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modal} p-10`}
      >
        <img
          src={closeIcon}
          className={styles.close}
          onClick={close}
          alt='Закрыть'
        />
        {children}
      </div>
    </ModalOverlay>
  )
}
