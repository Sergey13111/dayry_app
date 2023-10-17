import { useContext, useEffect, useState } from 'react';
import styles from './Item.module.css';
import { ItemType } from '../../types/ItemType';
import ActiveItemContex from '../../context/ActiveItemContext/ActiveItemContext';
import ItemsContex from '../../context/ItemsContext/ItemsContext';

const Item: React.FC<ItemType> = ({ item }) => {
	const [items, setItems] = useContext(ItemsContex);
	const [activeItem, setActiveItem] = useContext(ActiveItemContex);

	const filterComments = item.comments.filter((item) => item.itemId);
	const [quantity, setQuantity] = useState(filterComments.length);

	useEffect(() => {
		setQuantity(filterComments.length);
	}, [filterComments]);

	const toggleActive = (id: string) => {
		setActiveItem(id);
	};

	const removeTask = async (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
		event.stopPropagation();
		const filterItem = items.filter((item) => item.id !== id);
		setItems(filterItem);
		filterItem.length && setActiveItem(filterItem[0].id);
	};

	return (
		<li
			key={item.id}
			onClick={() => toggleActive(item.id)}
			className={activeItem === item.id ? `${styles.item} ${styles.activeItem}` : styles.item}>
			{item.task}
			<div className={styles.blockRight}>
				<span className={styles.badge}>{quantity}</span>
				<button
					className={`btn ${styles.btnDelete}`}
					onClick={(e) => removeTask(e, item.id)}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Item;
