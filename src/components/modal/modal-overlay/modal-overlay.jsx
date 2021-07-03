import ReactDOM from 'react-dom'

export default function ModalOverlay({children, close}) {
  //TODO: close modal on Esc button!
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