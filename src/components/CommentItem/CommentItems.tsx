import { CommentType } from '../../types/CommentType';
import styles from './Comment.module.css';

const CommentItem: React.FC<CommentType> = ({ itemId, comment, color, activeItem }) => {
	return (
		<li
			key={itemId}
			className={
				activeItem === itemId ? `${styles.activeComments} ${styles.item}` : styles.noActive
			}>
			<div
				style={{ backgroundColor: color || '#000' }}
				className={styles.color}></div>
			{comment}
		</li>
	);
};

export default CommentItem;
