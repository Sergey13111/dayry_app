import { createContext } from 'react';
import { ItemsContextStateType } from '../../types/ItemsContextStateType';
import { getItemsFromLocalStorage } from '../../helpers/getItemsFromLocalStorage';

const initialItems = getItemsFromLocalStorage();
const ItemsContext = createContext<ItemsContextStateType>(initialItems);

export default ItemsContext;
