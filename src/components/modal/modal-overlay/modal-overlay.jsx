import ReactDOM from 'react-dom'

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