"use client"
import React,{useEffect, useState} from 'react';
import dayjs from 'dayjs'
interface HeaderProps {
    name: string;
  }
const Header: React.FC<HeaderProps> = ({name}) => {
    const [currentime, setCurrenTime]=useState("")
    useEffect(()=>{
        setInterval(()=>{
            setCurrenTime(dayjs().format("dddd , MMMM D YYYY, hh:mm:ss A"))
        })
    },[])
  return (
    <header className="bg-gray-800 text-white p-4 text-center">
       {name && <h1 className="text-xl font-bold">Welcome to respected  <strong className='text-2xl font-bold'> {name}</strong>!</h1>}
      <p className="text-xl font-bold">{currentime}</p>
     
    </header>
  );
};

export default Header;
