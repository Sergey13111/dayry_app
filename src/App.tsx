import { useEffect, useState } from 'react';
import './App.css';
import Items from './components/Items/Items';
import { NewItemType } from './types/NewItemType';
import { CommentType } from './types/CommentType';
import Comments from './components/Comments/Comments';

const App: React.FC = () => {
	const [comments, setComments] = useState<CommentType[]>([]);

	const storedItems = localStorage.getItem('items');
	const initialItems = storedItems ? JSON.parse(storedItems) : [];
	const [todos, setTodos] = useState<NewItemType[]>(initialItems);

	const [toggleState, setToggleState] = useState('');

	useEffect(() => {
		localStorage.setItem('items', JSON.stringify(todos));
	}, [todos]);

	const addTask = (textInput: string) => {
		if (textInput.trim() !== '') {
			const newItem = {
				id: Math.random().toString().substring(2, 10),
				task: textInput,
			};
			setTodos([...todos, newItem]);
			toggleActive(newItem.id);
		} else {
			alert('Enter somethimg...');
		}
	};
	const addComment = (textInput: string, colorInput: string) => {
		if (textInput.trim() !== '') {
			const newComment = {
				id: toggleState,
				comment: textInput,
				color: colorInput,
			};

			setComments([...comments, newComment]);
		} else {
			alert('Enter somethimg...');
		}
	};

	const toggleActive = (id: string) => {
		setToggleState(id);
	};

	const removeTask = (id: string) => {
		const filterItem = [...todos.filter((item) => item.id !== id)];
		setTodos(filterItem);
	};

	return (
		<div className='app-wrapper container-fluid'>
			<aside className='aside'>
				<h2>DAYRY APP</h2>
				<span>Comment whit no sense</span>
			</aside>
			<main className='main container'>
				<Items
					todos={todos}
					addTask={addTask}
					removeTask={removeTask}
					toggleActive={toggleActive}
					toggleState={toggleState}
					comments={comments}
				/>
				<Comments
					comments={comments}
					addComment={addComment}
					toggleState={toggleState}
				/>
			</main>
		</div>
	);
};

export default App;
