import { CommentType } from './CommentType';

export type ItemType = {
	task: string;
	id: string;
	removeTask: (id: string) => void;
	toggleActive: (id: string) => void;
	toggleState: string;
	comments: CommentType[];
};
