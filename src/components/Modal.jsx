import { createPortal } from 'react-dom'

const Modal = ({ children, open, onClose }) => {
  return createPortal(
    <div
      onClick={onClose}
      className={`fixed insert flex justify-center items-center transition-colors ${
        open ? 'visible bg-black/20' : 'invisible'
      }  h-screen w-screen z-50`}
    >
      <div
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-125  opacity-0'
        }`}
      >
        {children}
      </div>
    </div>,
    document.getElementById('root')
  )
}

export default Modal
