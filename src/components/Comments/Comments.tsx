import { useContext } from 'react';
import CommentItem from '../CommentItem/CommentItems';
import CommentsForm from '../CommentsForm/CommentsForm';
import styles from './Comments.module.css';
import ActiveItemContex from '../../context/ActiveItemContext/ActiveItemContext';
import ItemsContex from '../../context/ItemsContext/ItemsContext';

const Comments: React.FC = () => {
	const [items] = useContext(ItemsContex);
	const [activeItem] = useContext(ActiveItemContex);

	const activeItemFind = items.find((item) => item.id === activeItem);

	return (
		<div className={styles.itemsWrapper}>
			<h1 className={styles.title}>Comments #{activeItem}</h1>

			<ul className={styles.listWrapper}>
				{activeItemFind?.comments.map(({ comment, itemId, color }, index) => (
					<CommentItem
						key={index}
						itemId={itemId}
						comment={comment}
						color={color}
						activeItem={activeItem}
					/>
				))}
			</ul>
			<CommentsForm />
		</div>
	);
};

export default Comments;
