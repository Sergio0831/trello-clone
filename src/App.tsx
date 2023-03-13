import { AddNewItem, Card, Column } from './components';
import { AppContainer } from './styles';

const App = () => {
	return (
		<AppContainer>
			<Column text='To Do'>
				<Card text='Generate app scaffold' />
			</Column>
			<Column text='In Progress'>
				<Card text='Learn Typescript' />
			</Column>
			<Column text='Done'>
				<Card text='Begin to use static typing' />
			</Column>
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={() => console.log('Added new list')}
			/>
		</AppContainer>
	);
};

export default App;
