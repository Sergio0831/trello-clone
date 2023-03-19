import { Dispatch, createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { AppState, List, Task, appStateReducer } from './AppStateReducer';
import { Action } from './actions';
import { DragItem } from '../DragItem';

type AppStateContextProps = {
	draggedItem: DragItem | null;
	lists: List[];
	getTasksByListId(id: string): Task[];
	dispatch: Dispatch<Action>;
};

type AppStateProviderProps = {
	children: React.ReactNode;
};

const AppStateContext = createContext<AppStateContextProps>(
	{} as AppStateContextProps,
);

const appData: AppState = {
	draggedItem: null,
	lists: [
		{
			id: '0',
			text: 'To Do',
			tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
		},
		{
			id: '1',
			text: 'In Progress',
			tasks: [{ id: 'c2', text: 'Learn Typescript' }],
		},
		{
			id: '2',
			text: 'Done',
			tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
		},
	],
};

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
	const [state, dispatch] = useImmerReducer(appStateReducer, appData);
	const { lists, draggedItem } = state;

	const getTasksByListId = (id: string) => {
		return lists.find((list) => list.id === id)?.tasks || [];
	};

	return (
		<AppStateContext.Provider
			value={{ lists, getTasksByListId, dispatch, draggedItem }}
		>
			{children}
		</AppStateContext.Provider>
	);
};

export const useAppState = () => {
	return useContext(AppStateContext);
};
