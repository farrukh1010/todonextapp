"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoForm from '@/app/components/createForm/createForm';
import TodoList from '@/app/components/toDoList/toDoList';
import Head from 'next/head';
import { MdAddChart, MdViewList } from 'react-icons/md'
interface Todo {
  text: string;
  description: string;
  isImportant: boolean;
  isNotImportant: boolean;
}

const MainPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showForm, setShowForm] = useState(true);

  const addTodo = (text: string, description: string, isImportant: boolean ,isNotImportant:boolean) => {
    const newTodo = { text, description, isImportant, isNotImportant};
    setTodos([...todos, newTodo]);
  };
  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
};
const handleUpdateTodo = (index: number, updatedTodo: Todo) => {
  const newTodos = todos.map((todo, i) => (i === index ? updatedTodo : todo));
  setTodos(newTodos);
};
  return (
    <div className="">
      <Head>
        <title>Next.js To-Do App</title>
      </Head>
      <header className="flex justify-between items-center py-4 bg-blue-500 px-10 ">
      

           <Link
          href={"/"}
          className="text-xl md:text-3xl text-white font-semibold"
        >
         To-Do App
        </Link>

      

        {/* <div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-500 text-white py-2 px-4 rounded-full mr-5"
          >
           
            Add Todo
          </button>
          <button
            onClick={() => setShowForm(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-full me-10"
          >
            View Todos
          </button>
        </div> */}
         <div className="flex space-x-4 ">
          <button
            onClick={() => setShowForm(true)}
            className="flex  items-center bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-200 "
          >
            <MdAddChart className="mr-2" />
            Add Todo
          </button>
          <button
            onClick={() => setShowForm(false)}
            className="flex  items-center bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-200 "
          >
            <MdViewList className="mr-2" />
            View Todos
          </button>
        </div>
      </header>
   <div className="container mx-auto py-4">
      {showForm ? (
        <TodoForm addTodo={addTodo} />
      ) : (
        <TodoList todos={todos }  onDelete={handleDeleteTodo}  onUpdate={handleUpdateTodo} />
      )}
</div>
      <ToastContainer />
    </div>
  );
};

export default MainPage;
