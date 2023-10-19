import { createContext } from 'react';
import { ActiveItemContextStateType } from '../../types/ActiveItemContextStateType';
import { getActiveItemFromLocalStorage } from '../../helpers/getActiveItemFromLocalStorage';

const initialActiveItem = getActiveItemFromLocalStorage();

const ActiveItemContext = createContext<ActiveItemContextStateType>(initialActiveItem);

export default ActiveItemContext;
