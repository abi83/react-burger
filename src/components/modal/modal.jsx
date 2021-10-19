import styles from './modal.module.css'
import { useEffect } from 'react'
import closeIcon from '../../images/close-icon.png'
import ModalOverlay from './modal-overlay/modal-overlay'
import { useDispatch } from 'react-redux'
import { CLOSE_MODAL } from '../../services/actions/modal'
import { useHistory } from 'react-router-dom';

export default function Modal({ children }) {
  const dispatch = useDispatch()
  const history = useHistory()

  const close = () =>{
    dispatch({ type: CLOSE_MODAL })
    history.push('/')
  }

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
