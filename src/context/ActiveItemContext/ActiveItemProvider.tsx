import { PropsWithChildren, useState } from 'react';
import ActiveItemContext from './ActiveItemContext';
import { getActiveItemFromLocalStorage } from '../../helpers/getActiveItemFromLocalStorage';

const ActiveItemProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const initialActiveItem = getActiveItemFromLocalStorage();
	const [activeItem, setActiveItem] = useState<string>(initialActiveItem);

	return (
		<ActiveItemContext.Provider value={[activeItem, setActiveItem]}>
			{children}
		</ActiveItemContext.Provider>
	);
};

export default ActiveItemProvider;
