import { CommentType } from './CommentType';

export type CommentsType = {
	comments: CommentType[];
	addComment: (textInput: string, colorInput: string) => void;
	toggleState: string;
};
