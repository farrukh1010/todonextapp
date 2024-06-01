
import React from 'react';

const Footer: React.FC = () => {
    let year = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
  
      <h1 className="mb-0 text-center text-xl text-white" > Developed by <strong>Farrukh Zaman</strong> &copy; {year}, All rights reserved</h1>
      {/* <p className="mb-0 text-center text-x text-white" > &copy; {year}, All rights reserved</p> */}

    </footer>
  );
};

export default Footer;
