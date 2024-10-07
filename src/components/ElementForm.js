import React, { useState } from 'react';
import Draggable from 'react-draggable';

const ElementForm = ({ addElement }) => {
  const [selectedElement, setSelectedElement] = useState('text');
  const [elements, setElements] = useState([]);

  const handleAddElement = () => {
    const newElement = {
      type: selectedElement,
      content: selectedElement === 'text' ? 'Sample Text' :
               selectedElement === 'image' ? 'https://via.placeholder.com/150' :
               'Click Me',  
      id: Date.now(), 
      isEditing: false, 
    };
    
    setElements([...elements, newElement]);
  };

  const handleEditContent = (id, newContent) => {
    const updatedElements = elements.map(el =>
      el.id === id ? { ...el, content: newContent, isEditing: false } : el
    );
    setElements(updatedElements);
  };

  const toggleEditMode = (id) => {
    const updatedElements = elements.map(el =>
      el.id === id ? { ...el, isEditing: !el.isEditing } : el
    );
    setElements(updatedElements);
  };

  return (
    <div className="element-form">
      <h3>Element Form</h3>
      <select
        value={selectedElement}
        onChange={(e) => setSelectedElement(e.target.value)}
        className="element-select"
      >
        <option value="text">Add Text Element</option>
        <option value="image">Add Image Element</option>
        <option value="button">Add Button Element</option>
      </select>
      <button className="add-button" onClick={handleAddElement}>
        Add & Drag Selected Element
      </button>

      <div className="elements-container">
        {elements.map((element) => (
          <Draggable key={element.id}>
            <div className="draggable-element">
              {element.isEditing ? (
                <input
                  type="text"
                  value={element.content}
                  onChange={(e) => handleEditContent(element.id, e.target.value)}
                />
              ) : (
                <div className="element-content">
                  {element.type === 'text' && <p>{element.content}</p>}
                  {element.type === 'image' && (
                    <img src={element.content} alt="User added" width="150" />
                  )}
                  {element.type === 'button' && <button>{element.content}</button>}
                </div>
              )}
              <button
                className="edit-button"
                onClick={() => toggleEditMode(element.id)}
              >
                {element.isEditing ? 'Save' : 'Edit'}
              </button>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default ElementForm;
