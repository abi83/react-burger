import ReactDOM from 'react-dom'

export default function ModalOverlay({children, close}) {
  // const { children } = props;
  return ReactDOM.createPortal(
  (
      <div className='modal-overlay' onClick={close}>
        {children}
      </div>
  ),
  document.getElementById('react-modals')
  )}