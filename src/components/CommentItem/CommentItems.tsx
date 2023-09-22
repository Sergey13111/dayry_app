import { CommentType } from '../../types/CommentType';
import styles from './Comment.module.css';

const CommentItem: React.FC<CommentType> = ({ id, comment, color, toggleState }) => {

	return (
		<li
			key={id}
			className={toggleState === id ? `${styles.activeComments} ${styles.item}` : styles.noActive}>
			<div
				style={{ backgroundColor: color || '#000' }}
				className={styles.color}></div>
			{comment}
		</li>
	);
};

export default CommentItem;
