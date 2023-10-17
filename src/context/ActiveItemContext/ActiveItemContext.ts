import { createContext } from 'react';
import { ActiveItemContextStateType } from '../../types/ActiveItemContextStateType';

const storedActiveItem = localStorage.getItem('activeItem');
const initialActiveItem = storedActiveItem ? JSON.parse(storedActiveItem) : '';

const ActiveItemContext = createContext<ActiveItemContextStateType>(initialActiveItem);

export default ActiveItemContext;
