import { CommentsType } from '../../types/CommentsType';
import CommentItem from '../CommentItem/CommentItems';
import CommentsForm from '../CommentsForm/CommentsForm';
import styles from './Comments.module.css';

const Comments: React.FC<CommentsType> = ({ items, addComment, activeItem }) => {
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
			<CommentsForm
				addComment={addComment}
				activeItem={activeItem}
			/>
		</div>
	);
};

export default Comments;
