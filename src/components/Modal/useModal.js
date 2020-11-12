import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {  
    console.log("we are going to toggle the value" + isShowing)
    setIsShowing(!isShowing);
  }
  return {
    isShowing,
    toggle,
  }
};

export default useModal;