import { CommentType } from './CommentType';
import { NewItemType } from './NewItemType';

export type TodosType = {
	todos: NewItemType[];
	newItem?: NewItemType;
	addTask: (textInput: string) => void;
	removeTask: (id: string) => void;
	toggleActive: (id: string) => void;
	toggleState: string;
	comments: CommentType[];
};
