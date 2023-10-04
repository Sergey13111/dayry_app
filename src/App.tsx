import { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items/Items';
import Comments from './components/Comments/Comments';
import { TaskType } from './types/TaskType';

const App: React.FC = () => {
	const storedItems = localStorage.getItem('items');
	const storedActiveItem = localStorage.getItem('activeItem');

	const initialItems = storedItems ? JSON.parse(storedItems) : [];
	const initialActiveItem = storedActiveItem ? JSON.parse(storedActiveItem) : '';

	const [items, setItems] = useState<TaskType[]>(initialItems);
	const [activeItem, setActiveItem] = useState<string>(initialActiveItem);

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(items));
		localStorage.setItem('activeItem', JSON.stringify(activeItem));
		items.length === 0 && setActiveItem('');
	}, [items, activeItem]);

	const addTask = (textInput: string) => {
		if (textInput.trim() !== '') {
			const newItem = {
				id: Math.random().toString().substring(2, 10),
				task: textInput,
				comments: [],
			};
			setItems([...items, newItem]);
			toggleActive(newItem.id);
		} else {
			alert('Enter somethimg...');
		}
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

	const toggleActive = (id: string) => {
		setActiveItem(id);
	};

	const removeTask = async (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
		event.stopPropagation();
		const filterItem = items.filter((item) => item.id !== id);
		setItems(filterItem);
		filterItem.length && setActiveItem(filterItem[0].id);
	};

	return (
		<div className='app-wrapper container-fluid'>
			<aside className='aside'>
				<h2>DAYRY APP</h2>
				<span>Comment whit no sense</span>
			</aside>
			<main className='main container'>
				<Items
					items={items}
					addTask={addTask}
					removeTask={removeTask}
					toggleActive={toggleActive}
					activeItem={activeItem}
				/>
				<Comments
					items={items}
					addComment={addComment}
					activeItem={activeItem}
				/>
			</main>
		</div>
	);
};

export default App;
