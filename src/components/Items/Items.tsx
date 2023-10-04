import { ItemsType } from '../../types/ItemsType';
import Item from '../Item/Item';
import ItemsForm from '../ItemsForm/ItemsForm';
import styles from './Items.module.css';

const Items: React.FC<ItemsType> = ({
	items,
	addTask,
	removeTask,
	toggleActive,
	activeItem,
}) => {
	return (
		<div className={styles.itemsWrapper}>
			<h1 className={styles.title}>Items</h1>
			<ItemsForm addTask={addTask} />
			<ul className={styles.listWrapper}>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
						removeTask={removeTask}
						toggleActive={toggleActive}
						activeItem={activeItem}
					/>
				))}
			</ul>
		</div>
	);
};

export default Items;
