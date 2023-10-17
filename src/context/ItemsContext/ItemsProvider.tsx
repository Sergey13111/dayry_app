import { PropsWithChildren, useState } from 'react';
import { TaskType } from '../../types/TaskType';
import ItemsContext from './ItemsContext';

const ItemsProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const storedItems = localStorage.getItem('items');
	const initialItems = storedItems ? JSON.parse(storedItems) : [];
	const [items, setItems] = useState<TaskType[]>(initialItems);

	return <ItemsContext.Provider value={[items, setItems]}>{children}</ItemsContext.Provider>;
};

export default ItemsProvider;
