import { useState } from 'react';

const usePasswordToggle = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return { isPasswordVisible, togglePasswordVisibility };
};

export default usePasswordToggle;
