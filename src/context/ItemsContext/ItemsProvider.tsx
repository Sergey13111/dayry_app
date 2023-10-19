import { PropsWithChildren, useState } from 'react';
import { TaskType } from '../../types/TaskType';
import ItemsContext from './ItemsContext';
import { getItemsFromLocalStorage } from '../../helpers/getItemsFromLocalStorage';

const ItemsProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const initialItems = getItemsFromLocalStorage();
	const [items, setItems] = useState<TaskType[]>(initialItems);

	return <ItemsContext.Provider value={[items, setItems]}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
