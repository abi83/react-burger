import ReactDOM from 'react-dom'

export default function ModalOverlay(props) {
  const { children } = props;
  return ReactDOM.createPortal(
  (
      <div className='modal-overlay'>
        {children}
      </div>
  ),
  document.getElementById('react-modals')
  )}