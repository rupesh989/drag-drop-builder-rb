import { createContext, useContext } from 'react';
import { DndProvider, HTML5Backend } from 'react-dnd-html5-backend';

const DndContext = createContext();

export const DndContextProvider = ({ children }) => (
  <DndProvider backend={HTML5Backend}>
    {children}
  </DndProvider>
);

export const useDndContext = () => useContext(DndContext);
