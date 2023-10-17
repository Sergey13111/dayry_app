import { useContext } from 'react';
import Item from '../Item/Item';
import ItemsForm from '../ItemsForm/ItemsForm';
import styles from './Items.module.css';
import ItemsContex from '../../context/ItemsContext/ItemsContext';

const Items: React.FC = () => {
	const [items] = useContext(ItemsContex);

	return (
		<div className={styles.itemsWrapper}>
			<h1 className={styles.title}>Items</h1>
			<ItemsForm />
			<ul className={styles.listWrapper}>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
					/>
				))}
			</ul>
		</div>
	);
};

export default Items;
