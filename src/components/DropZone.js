import React from 'react';
import DraggableElement from './DraggableElement';

const DropZone = ({ elements, onRemove }) => {
  return (
    <div className="drop-zone">
      {elements.map((element) => (
        <DraggableElement
          key={element.id}
          type={element.type}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default DropZone;
