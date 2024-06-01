"use client"
import React ,{useState}from 'react';
import { BiCommentEdit } from "react-icons/bi";
import { MdCancel } from 'react-icons/md';
import { MdDeleteForever } from "react-icons/md";
import DeleteConfirmationModal from "@/app/components/deleteConformationModal/deleteConformationModal"
import Modal from "@/app/components/createModalForm/createModalForm"
import { toast } from 'react-toastify';
interface Todo {
  text: string;
  description: string;
  isImportant: boolean;
  isNotImportant: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDelete: (index: number) => void;
  onUpdate: (index: number, updatedTodo: Todo) => void;
}


const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleEditClick = (index: number) => {
    setCurrentIndex(index);
    setCurrentTodo(todos[index]);
    setIsModalOpen(true);
  };
  const handleDeleteClick = (index: number) => {

    setCurrentIndex(index);
    setCurrentTodo(todos[index]);
    setIsDeleteModalOpen(true);
  };
  const handleDeleteConfirm = () => {
    if (currentIndex !== null) {
      onDelete(currentIndex);
      setIsDeleteModalOpen(false);
      toast.success('Todo has been deleted successfully!');
    }
  };
  const handleUpdateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCurrentTodo(prevTodo => (prevTodo ? { ...prevTodo, [name]: value } : null));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'isImportant'){
        setCurrentTodo(prevTodo => (prevTodo ? { ...prevTodo, [name]: checked,isNotImportant: !checked } : null));
         } else{
            setCurrentTodo(prevTodo => (prevTodo ? { ...prevTodo, [name]: checked,isImportant: !checked } : null));
         }
   
  };
  const handleUpdateSubmit = () => {
    if (currentIndex !== null && currentTodo) {
      onUpdate(currentIndex, currentTodo);
      setIsModalOpen(false);
      toast.success('Todo has been updated successfully!');
    }
  };
   const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    toast.error('Sorry! Operation has been canceled by your request.', {
      style: { backgroundColor: 'white', color: 'gray' }
    });
  };
  const handleUpdateCancel = () => {
    setIsModalOpen(false);
    toast.error('Sorry! Operation has been canceled by your request.', {
      style: { backgroundColor: 'white', color: 'gray' },
    });
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-4 text-center">All Todos</h2>
    { todos.length >0 ? 
     <>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr>
          <th className="py-2 px-4 border-b ">Sr.No</th>
            <th className="py-2 px-4 border-b ">Text</th>
            <th className="py-2 px-4 border-b ">Description</th>
            <th className="py-2 px-4 border-b ">Important or notImportant</th>
            <th className="py-2 px-4 border-b ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                <td className="py-2 px-4 border-b text-center">{todo.text}</td>
              <td className="py-2 px-4 border-b text-center">{todo.description}</td>
              <td className={`py-2 px-4 border-b text-center ${todo.isImportant ? 'text-red-500' : 'text-gray-500'}`}>
              {todo.isImportant ? 'Important' : 'isNotImportant'}
              </td>
              <td className="flex justify-center space-x-4 border-b">
                <button
                  onClick={() => handleEditClick(index)}
                  className="flex items-center  bg-green-500 text-white text-center px-4 py-2 rounded-full hover:bg-green-600 transition duration-200  "
                > <BiCommentEdit className="mr-1" />
                  Update
                </button>
                <button
                  onClick={() => handleDeleteClick(index)}
                  className="flex items-center bg-red-500 text-white text-center px-4 py-2 rounded-full hover:bg-red-600 transition duration-200"
                ><MdDeleteForever className="mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      </> 
      :  <div> <h1 className=' text-xl font-semibold mb-4 text-center text-green-500'>No Todo Found!</h1>   
      <h1 className=' text-xl font-semibold mb-4 text-center text-green-500'>Please Enter Todo First!</h1>  
      <h1 className=' text-xl font-semibold mb-4 text-center text-green-500'>Thanks!</h1> 
       </div>}
      
     
      <Modal isOpen={isModalOpen} onClose={handleUpdateCancel} hideCloseButton>
        {currentTodo && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Update Todo</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Text</label>
              <input
                type="text"
                name="text"
                value={currentTodo.text}
                onChange={handleUpdateChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={currentTodo.description}
               
              
                onChange={handleUpdateChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="isImportant"
                  checked={currentTodo.isImportant}
           
                  onChange={handleCheckboxChange}
             
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Is Important</span>
              </label>
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="isNotImportant"
                  checked={currentTodo.isNotImportant}
                  onChange={handleCheckboxChange}
              
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">Is Not Important</span>
              </label>
            </div>
            {/* <button
              onClick={handleUpdateSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
            >
              Update
            </button>
            <button
                onClick={handleUpdateCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-200 ms-4"
              >
                Cancel
              </button> */}
               <div className="flex space-x-4">
        <button
          onClick={handleUpdateSubmit}
          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200 "
        >
          <BiCommentEdit className="mr-2" />
          Update
        </button>
        <button
          onClick={handleUpdateCancel}
          className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition duration-200"
        >
          <MdCancel className="mr-2" />
          Cancel
        </button>
      </div>
          </div>
        )}
      </Modal>
       

         {isDeleteModalOpen && currentTodo && (
        <DeleteConfirmationModal
          todo={currentTodo}
          // onClose={() => setIsDeleteModalOpen(false)}
           onClose={handleDeleteCancel}
          onDelete={handleDeleteConfirm}
          
        />
      )}

    </div>
  );
};

export default TodoList;
