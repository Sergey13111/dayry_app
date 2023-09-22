import { useState } from 'react';
import { FormType } from '../../types/FormType';
import styles from './ItemsForm.module.css';
const ItemsForm: React.FC<FormType> = ({ addTask }) => {
	const [textInput, setTextInput] = useState<string>('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTextInput(event.currentTarget.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addTask(textInput);
		setTextInput('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={styles.form}>
			<input
				value={textInput}
				type='text'
				onChange={handleChange}
				placeholder='Type name here...'
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

export default ItemsForm;
