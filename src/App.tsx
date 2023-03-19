import { AddNewItem, Column } from './components';
import { CustomDragLayer } from './components/CustomDragLayer';
import { addList } from './state/actions';
import { useAppState } from './state/AppStateContext';
import { AppContainer } from './styles';

const App = () => {
	const { lists, dispatch } = useAppState();

	return (
		<AppContainer>
			<CustomDragLayer />
			{lists.map((list) => (
				<Column id={list.id} key={list.id} text={list.text} />
			))}
			<AddNewItem
				toggleButtonText='+ Add another list'
				onAdd={(text) => dispatch(addList(text))}
			/>
		</AppContainer>
	);
};

export default App;
