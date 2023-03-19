import { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { DragItem } from '../DragItem';
import { addTask, moveList } from '../state/actions';
import { useAppState } from '../state/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import { isHidden } from '../utils/isHidden';
import { useItemDrag } from '../utils/useItemDrag';
import AddNewItem from './AddNewItem';
import Card from './Card';

type ColumnProps = {
	id: string;
	text?: string;
	isPreview?: boolean;
};

const Column = ({ id, text, isPreview }: ColumnProps) => {
	const { getTasksByListId, dispatch, draggedItem } = useAppState();
	const tasks = getTasksByListId(id);
	const ref = useRef<HTMLDivElement>(null);
	const { drag } = useItemDrag({ type: 'COLUMN', id, text });

	const [, drop] = useDrop({
		accept: 'COLUMN',
		hover() {
			if (!draggedItem) {
				return;
			}
			if (draggedItem.type === 'COLUMN') {
				if (draggedItem.id === id) {
					return;
				}
				dispatch(moveList(draggedItem.id, id));
			}
		},
	});

	drag(drop(ref));

	return (
		<ColumnContainer
			ref={ref}
			isHidden={isHidden(draggedItem, 'COLUMN', id, isPreview)}
			isPreview={isPreview}
		>
			<ColumnTitle>{text}</ColumnTitle>
			{tasks.map((task) => (
				<Card id={task.id} key={task.id} text={task.text} columnId={id} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another task'
				onAdd={(text) => dispatch(addTask(text, id))}
				dark
			/>
		</ColumnContainer>
	);
};

export default Column;
