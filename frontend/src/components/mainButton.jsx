import React from 'react';
import { useTheme } from '../providers/ThemeProvider';

function MainButton({ children, className, onClick, buttonText, icon }) {

    const { colorValues } = useTheme();

  return (
    <button 
        className={`${className} px-4 py-2 rounded-xs font-bold flex`}
        style={{
            backgroundColor: colorValues.buttonColor, 
            color: colorValues.buttonColorText,
        }}
        >
            {buttonText}
            {icon}
    </button>
  );
}

export default MainButton;