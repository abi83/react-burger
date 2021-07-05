import ReactDOM from 'react-dom';
// import styles from './modal-oberlay.module.css'

export default function ModalOverlay({close, children}) {
  return ReactDOM.createPortal(
  (
      <div className='modal-overlay'
           onClick={close}
           >
        {children}
      </div>
  ),
  document.getElementById('react-modals')
  )}