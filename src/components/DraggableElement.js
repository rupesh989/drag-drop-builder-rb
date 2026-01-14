import React, { useState, useRef } from 'react';

const DraggableElement = ({ type, onRemove }) => {
  const [size, setSize] = useState({ width: 200, height: 100 });
  const elementRef = useRef(null);

  const handleResize = (e) => {
    const newWidth = e.clientX - elementRef.current.getBoundingClientRect().left;
    const newHeight = e.clientY - elementRef.current.getBoundingClientRect().top;

    setSize({ width: newWidth, height: type === 'text' ? 'auto' : newHeight });
  };

  const handleDoubleClick = () => {
    onRemove(type); 
  };

  return (
    <div
      ref={elementRef}
      className={`${type}-element draggable-element`}
      style={{
        width: size.width,
        height: type === 'text' ? 'auto' : size.height,
        padding: '10px',
      }}
      draggable
      onDragStart={(e) => e.dataTransfer.setData('text/plain', type)}
      onDoubleClick={handleDoubleClick} 
    >
      {type === 'text' ? 'This is a text element' : <img src="your-image-url.jpg" alt="Draggable" className="image-element" />}
      <div
        onMouseDown={handleResize}
        style={{
          cursor: 'nwse-resize',
          height: '110px',
          width: '110px',
          backgroundColor: '#6c63ff',
          borderRadius: '500%',
          position: 'absolute',
          right: 0,
          bottom: 0,
          transform: 'translate(50%, 50%)',
        }}
      />
    </div>
  );
};

export default DraggableElement;
