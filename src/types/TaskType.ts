import { CommentType } from './CommentType';

export type TaskType = {
	id: string;
	task: string;
	comments: CommentType[];
};
