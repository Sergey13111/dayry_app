import { TaskType } from './TaskType';

export type ItemsType = {
	items: TaskType[];
	addTask: (textInput: string) => void;
	removeTask: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
	toggleActive: (id: string) => void;
	activeItem: string;
};
