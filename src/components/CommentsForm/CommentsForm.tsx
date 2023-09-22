import { useState } from 'react';
import styles from './CommentsForm.module.css';
import { CommentsFormType } from '../../types/CommentsFormType';

const CommentsForm: React.FC<CommentsFormType> = ({ addComment }) => {
	const [textInput, setTextInput] = useState<string>('');
	const [colorInput, setColorInput] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextInput(event.currentTarget.value);
	};

	const handleChangeColor = (event: React.ChangeEvent<HTMLInputElement>) => {

		setColorInput(event.currentTarget.value);
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
			<button
				type='submit'
				className={`btn ${styles.buttonAdd}`}>
				Add New
			</button>
		</form>
	);
};

export default CommentsForm;
