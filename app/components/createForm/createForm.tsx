"use client"
import React, { useState } from 'react';
import { MdAddChart } from "react-icons/md";

import { toast } from 'react-toastify';

interface TodoFormProps {
  addTodo: (text: string, description: string, isImportant: boolean, isNotImportant:boolean) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(false);
  const [isNotImportant, setIsNotImportant] = useState(false);
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === '' || text.length < 3 || text.length > 10) {
        toast.error('Text must be between 3 and 10 characters!');
        return;
    }
    if (description.trim() === '' || description.length > 40) {
        toast.error('Description cannot be empty and must be less than 40 characters!');
        return;
      }
      if (!isImportant && !isNotImportant) {
        toast.error('Please select at least one of Important or Not Important!');
        return;
      }
    addTodo(text, description, isImportant, isNotImportant);
    setText('');
    setDescription('');
    setIsImportant(false);
    setIsNotImportant(false)
    toast.success('Todo added successfully!');
  };
  const handleImportantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsImportant(e.target.checked);
    if (e.target.checked) {
      setIsNotImportant(false);
    }
  };
  const handleNotImportantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNotImportant(e.target.checked);
    if (e.target.checked) {
      setIsImportant(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-0">
      <form onSubmit={handleAddTodo } className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-200 mt-0">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Todo</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isImportant}
            
            onChange={handleImportantChange}
            className="form-checkbox h-5 w-5 text-blue-600"
              
            />
            <span className="ml-2 text-gray-700">Is Important</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isNotImportant}
              onChange={handleNotImportantChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">IsNotImportant</span>
          </label>
        </div>
        <button type="submit" className="flex justify-center items-center mb-2 bg-green-500  p-1 text-white rounded-md w-full"><MdAddChart />
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
