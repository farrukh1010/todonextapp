import React from 'react';
import { MdCancel } from 'react-icons/md';
import { MdDeleteForever } from "react-icons/md";

interface DeleteConfirmationModalProps {
  todo: { text: string; description: string };
  onClose: () => void;
  onDelete: () => void;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ todo, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Delete Todo</h2>
        <p className="mb-4">Are you sure you want to delete the following todo?</p>
        <p className="mb-4"><strong>Text:</strong> {todo.text}</p>
        <p className="mb-4"><strong>Description:</strong> {todo.description}</p>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-200"
          > <MdCancel className="mr-1" />
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded-full hover:bg-gray-600 transition duration-200"
          > <MdDeleteForever className="mr-1" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
