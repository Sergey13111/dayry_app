import { useEffect, useState } from 'react';
import { ItemType } from '../../types/ItemType';
import styles from './Item.module.css';

const Item: React.FC<ItemType> = ({
	task,
	id,
	removeTask,
	toggleActive,
	toggleState,
	comments,
}) => {
	const filterComments = comments.filter((item) => item.id === id);
	const [quantity, setQuantity] = useState(filterComments.length);

	useEffect(() => {
		setQuantity(filterComments.length);
	}, [comments, filterComments]);

	return (
		<li
			key={id}
			onClick={() => toggleActive(id)}
			className={toggleState === id ? `${styles.item} ${styles.activeItem}` : styles.item}>
			{task}
			<div className={styles.blockRight}>
				<span className={styles.badge}>{quantity}</span>
				<button
					className={`btn ${styles.btnDelete}`}
					onClick={() => removeTask(id)}>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Item;
