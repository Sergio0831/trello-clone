import { useAppState } from '../state/AppStateContext';
import { ColumnContainer, ColumnTitle } from '../styles';
import AddNewItem from './AddNewItem';
import Card from './Card';

type ColumnProps = {
	id: string;
	text?: string;
};

const Column = ({ id, text }: ColumnProps) => {
	const { getTasksByListId } = useAppState();
	const tasks = getTasksByListId(id);

	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{tasks.map((task) => (
				<Card id={task.id} key={task.id} text={task.text} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another task'
				onAdd={() => console.log('Added new task')}
				dark
			/>
		</ColumnContainer>
	);
};

export default Column;
