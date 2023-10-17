import { PropsWithChildren, useState } from 'react';
import ActiveItemContext from './ActiveItemContext';

const ActiveItemProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const storedActiveItem = localStorage.getItem('activeItem');
	const initialActiveItem = storedActiveItem ? JSON.parse(storedActiveItem) : '';
	const [activeItem, setActiveItem] = useState<string>(initialActiveItem);

	return (
		<ActiveItemContext.Provider value={[activeItem, setActiveItem]}>
			{children}
		</ActiveItemContext.Provider>
	);
};

export default ActiveItemProvider;
