import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomAlert = () => {
  const [isVisible, setIsVisible] = useState(false);
  let message
  const [type, setType] = useState('info'); // or success, warning, error, etc.

  const showAlert = (message, type) => {
   
    setType(type);
    setIsVisible(true);
  };

  return (
    <div>
      <ToastContainer />
      {isVisible && (
        <div className={`alert alert-${type}`}>
          <button onClick={() => setIsVisible(false)}>&times;</button>
          {message}
        </div>
      )}
    </div>
  );
};

// Define a static method to show alerts from other components
CustomAlert.showAlert = (message, type) => {
  toast(message, { type: type });
};

export default CustomAlert;
