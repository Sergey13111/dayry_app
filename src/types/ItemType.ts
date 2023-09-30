import { CommentType } from './CommentType';

export type ItemType = {
	task: string;
	id: string;
	removeTask: (e: React.MouseEvent<HTMLButtonElement>, id: string) => void;
	toggleActive: (id: string) => void;
	toggleState: string;
	comments: CommentType[];
};
