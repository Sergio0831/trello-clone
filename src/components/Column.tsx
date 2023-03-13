import { ColumnContainer, ColumnTitle } from '../styles';
import AddNewItem from './AddNewItem';

type ColumnProps = {
	text?: string;
	children?: React.ReactNode;
};

const Column = ({ text, children }: ColumnProps) => {
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
			<AddNewItem
				toggleButtonText='+ Add another task'
				onAdd={() => console.log('Added new task')}
				dark
			/>
		</ColumnContainer>
	);
};

export default Column;
