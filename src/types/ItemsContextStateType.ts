import { TaskType } from './TaskType';

export type ItemsContextStateType = [TaskType[], React.Dispatch<React.SetStateAction<TaskType[]>>];
