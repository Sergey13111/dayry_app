import { useContext, useEffect } from 'react';
import styles from './Main.module.css';
import ItemsContext from '../../context/ItemsContext/ItemsContext';
import ActiveItemContext from '../../context/ActiveItemContext/ActiveItemContext';
import Items from '../Items/Items';
import Comments from '../Comments/Comments';

const Main: React.FC = () => {
	const [items] = useContext(ItemsContext);
	const [activeItem, setActiveItem] = useContext(ActiveItemContext);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
		localStorage.setItem('activeItem', JSON.stringify(activeItem));
		items.length === 0 && setActiveItem('');
	}, [activeItem, items, setActiveItem]);

	return (
		<main className={`${styles.main} ${styles.container}`}>
			<Items />
			<Comments />
		</main>
	);
};

export default Main;
