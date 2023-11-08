import './App.css';
import React from 'react';
import ColorPicker from './components/colors';
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
function App() {
  
  return (
    <div>
      <ColorPicker colors = {colors} />
    </div>
  );
}

export default App;
