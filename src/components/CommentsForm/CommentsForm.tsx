import { useContext, useState } from 'react';
import styles from './CommentsForm.module.css';
import ItemsContext from '../../context/ItemsContext/ItemsContext';
import ActiveItemContext from '../../context/ActiveItemContext/ActiveItemContext';

const CommentsForm: React.FC = () => {
	const [textInput, setTextInput] = useState<string>('');
	const [colorInput, setColorInput] = useState<string>('');
	const [items, setItems] = useContext(ItemsContext);
	const [activeItem] = useContext(ActiveItemContext);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextInput(event.currentTarget.value);
	};

	const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
		setColorInput(event.currentTarget.value);
	};

	const addComment = (textInput: string, colorInput: string) => {
		const activeItemIndex = items.findIndex((item) => item.id === activeItem);
		if (textInput.trim() !== '' && activeItemIndex !== -1) {
			const newComment = {
				itemId: activeItem,
				comment: textInput,
				color: colorInput,
			};
			const updatedItems = [...items];
			updatedItems[activeItemIndex].comments.push(newComment);

			setItems(updatedItems);
		} else {
			alert('Enter somethimg...');
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addComment(textInput, colorInput);
		setTextInput('');
		setColorInput('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={styles.form}>
			<div className={styles.wrapperInput}>
				<input
					type='color'
					className={styles.InputColor}
					value={colorInput}
					onChange={handleChangeColor}
				/>
				<textarea
					value={textInput}
					onChange={handleChange}
					placeholder='Type comment here...'
					className={styles.textInput}
					required
				/>
			</div>
			<button
				type='submit'
				disabled={!activeItem}
				className={`btn ${styles.buttonAdd}`}>
				Add New
			</button>
		</form>
	);
};

export default CommentsForm;
