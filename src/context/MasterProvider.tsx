import { PropsWithChildren } from 'react';
import ItemsProvider from './ItemsContext/ItemsProvider';
import ActiveItemProvider from './ActiveItemContext/ActiveItemProvider';

const MasterProvider: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<ItemsProvider>
			<ActiveItemProvider>{children}</ActiveItemProvider>
		</ItemsProvider>
	);
};

export default MasterProvider;
