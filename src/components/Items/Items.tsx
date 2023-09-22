import { TodosType } from '../../types/TodosType';
import Item from '../Item/Item';
import ItemsForm from '../ItemsForm/ItemsForm';
import styles from './Items.module.css';

const Items: React.FC<TodosType> = ({
	todos,
	addTask,
	removeTask,
	toggleActive,
	toggleState,
	comments,
}) => {
	return (
		<div className={styles.itemsWrapper}>
			<h1 className={styles.title}>Items</h1>
			<ItemsForm addTask={addTask} />
			<ul className={styles.listWrapper}>
				{todos.map(({ task, id }) => (
					<Item
						key={id}
						id={id}
						task={task}
						removeTask={removeTask}
						toggleActive={toggleActive}
						toggleState={toggleState}
						comments={comments}
					/>
				))}
			</ul>
		</div>
	);
};

export default Items;
