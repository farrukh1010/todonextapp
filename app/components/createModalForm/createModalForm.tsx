import React from 'react';
import { FaTimes } from 'react-icons/fa';

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  hideCloseButton?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, hideCloseButton, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      {!hideCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition duration-200"
          >
            <FaTimes />
          </button>
        )}
        {children}
        {/* <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200"
        >
          Close
        </button> */}
     
      </div>
    </div>
  );
};

export default Modal;
