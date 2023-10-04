import { useEffect, useState } from 'react';
import styles from './Item.module.css';
import { ItemType } from '../../types/ItemType';

const Item: React.FC<ItemType> = ({
	item,
	removeTask,
	toggleActive,
	activeItem,
}) => {
	const filterComments = item.comments.filter((item) => item.itemId);
	const [quantity, setQuantity] = useState(filterComments.length);

	useEffect(() => {
		setQuantity(filterComments.length);
	}, [filterComments]);

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
