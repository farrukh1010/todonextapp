// import Image from "next/image";
// import MainPage from "@/app/components/mainPage/mianPage"
// export default function Home() {
//   return (
    
//     <div>
//       <MainPage/>
//     </div>
//   );
// }
"use client"
import React, { useState, useEffect } from 'react';
import MainPage from "@/app/components/mainPage/mianPage";
import Header from "@/app/components/topbar/topbar";
import Footer from "@/app/components/footer/footer";
import NamePopup from "@/app/components/namePopup/namePopup";
import Loader from "@/app/components/loader/loader";

export default function Home() {
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const handleNameSubmit = (name: string) => {
    setName(name);
    setShowPopup(false);
    setShowPopup(false);
    setShowLoader(true);
     
     setTimeout(() => {
      setShowLoader(false);
      setShowMainContent(true);
    }, 2000); 
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header name={name} />
      <main className="flex-grow bg-[#eaeaea]">
{/*        
        {showPopup ? (
          <NamePopup onSubmit={handleNameSubmit} />
        ) : (
          <MainPage />
        )} */}
         {showPopup && <NamePopup onSubmit={handleNameSubmit} />}
        {showLoader && <Loader />}
        {showMainContent && <MainPage />}

      </main>
      <Footer />
    </div>
  );
}
