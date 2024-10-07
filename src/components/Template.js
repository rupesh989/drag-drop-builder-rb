import React, { useState } from 'react';
import ElementForm from './ElementForm';
import DropZone from './DropZone';

const Template = () => {
  const [elements, setElements] = useState([]);

  const addElement = (type) => {
    const newElement = {
      id: elements.length + 1,
      type: type,
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (type) => {
    setElements(elements.filter((element) => element.type !== type));
  };

  return (
    <div className="template-container">
      <ElementForm addElement={addElement} /> {/* Ensure this is correctly passing the function */}
      <DropZone elements={elements} onRemove={removeElement} />
    </div>
  );
};

export default Template;
