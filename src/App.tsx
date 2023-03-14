import { AddNewItem, Column } from './components';
import { useAppState } from './state/AppStateContext';
import { AppContainer } from './styles';

const App = () => {
	const { lists } = useAppState();

	return (
		<AppContainer>
			{lists.map((list) => (
				<Column id={list.id} key={list.id} text={list.text} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={() => console.log('Added new list')}
			/>
		</AppContainer>
	);
};

export default App;
