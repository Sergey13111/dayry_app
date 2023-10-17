import { createContext } from 'react';
import { ItemsContextStateType } from '../../types/ItemsContextStateType';

const storedItems = localStorage.getItem('items');
const initialItems = storedItems ? JSON.parse(storedItems) : [];
const ItemsContext = createContext<ItemsContextStateType>(initialItems);

export default ItemsContext;
