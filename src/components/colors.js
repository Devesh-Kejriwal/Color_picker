import React, { useState, useEffect } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  useEffect(() => {
    // Update the background color of the body element with the selected color
    document.body.style.backgroundColor = selectedColor || '#f0f0f0';

    // Clean up the effect by resetting the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [selectedColor]);

  const appStyle = {
    backgroundColor: selectedColor || '#f0f0f0',
  };

  const buttonStyle = {
    backgroundColor: selectedColor || '#0074d9',
  };

  return (
    <div className="ColorPicker" style={appStyle}>
      <button onClick={handleButtonClick} style={buttonStyle}>Pick a color</button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
