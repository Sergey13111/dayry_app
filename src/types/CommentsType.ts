import { TaskType } from './TaskType';

export type CommentsType = {
	items: TaskType[];
	addComment: (textInput: string, colorInput: string) => void;
	activeItem: string;
};
