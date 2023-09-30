import { CommentsType } from '../../types/CommentsType';
import CommentItem from '../CommentItem/CommentItems';
import CommentsForm from '../CommentsForm/CommentsForm';
import styles from './Comments.module.css';

const Comments: React.FC<CommentsType> = ({ comments, addComment, toggleState }) => {
	return (
		<div className={styles.itemsWrapper}>
			<h1 className={styles.title}>Comments #{toggleState}</h1>

			<ul className={styles.listWrapper}>
				{comments?.map(({ comment, id, color }, index) => (
					<CommentItem
						key={index}
						id={id}
						comment={comment}
						color={color}
						toggleState={toggleState}
					/>
				))}
			</ul>
			<CommentsForm
				addComment={addComment}
				toggleState={toggleState}
			/>
		</div>
	);
};

export default Comments;
