import { useContext, useState } from 'react';
import styles from './ItemsForm.module.css';
import ItemsContex from '../../context/ItemsContext/ItemsContext';
import ActiveItemContex from '../../context/ActiveItemContext/ActiveItemContext';

const ItemsForm: React.FC = () => {
	const [textInput, setTextInput] = useState<string>('');

	const [items, setItems] = useContext(ItemsContex);
	const [, setActiveItem] = useContext(ActiveItemContex);

	const addTask = (textInput: string) => {
		if (textInput.trim() !== '') {
			const newItem = {
				id: Math.random().toString().substring(2, 10),
				task: textInput,
				comments: [],
			};
			setItems([...items, newItem]);

			setActiveItem(newItem.id);
		} else {
			alert('Enter somethimg...');
		}
	};

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
