import styled from 'styled-components';

type AddItemButtonProps = {
	dark?: boolean;
};

type DragPreviewWrapperProps = {
	position: {
		x: number;
		y: number;
	};
};

interface DragPreviewContainerProps {
	isHidden?: boolean;
	isPreview?: boolean;
}

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
	({ position: { x, y } }) => ({
		style: {
			transform: `translate(${x}px, ${y}px)`,
		},
	}),
)<DragPreviewWrapperProps>``;

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
	transform: ${(props) => (props.isPreview ? 'rotate(5deg)' : undefined)};
	opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const CustomDragLayerContainer = styled.div`
	height: 100%;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	pointer-events: none;
`;

export const AppContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	background-color: #3179ba;
	height: 100%;
	width: 100%;
	padding: 20px;
`;

export const ColumnContainer = styled(DragPreviewContainer)`
	background-color: #ebecf0;
	width: 300px;
	min-height: 40px;
	margin-right: 20px;
	border-radius: 3px;
	padding: 8px;
	flex-grow: 0;
`;

export const ColumnTitle = styled.div`
	padding: 6px 16px 12px;
	font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
	background-color: #fff;
	cursor: pointer;
	margin-bottom: 0.5rem;
	max-width: 300px;
	border-radius: 3px;
	padding: 0.5rem 1rem;
	box-shadow: #091e4240 0px 1px 0px 0px;
`;

export const AddItemButton = styled.button<AddItemButtonProps>`
	width: 100%;
	max-width: 300px;
	padding: 10px 12px;
	border: none;
	border-radius: 3px;
	color: ${(props) => (props.dark ? '#000' : '#fff')};
	background-color: #ffffff3d;
	text-align: left;
	transition: background-color 85ms ease-in;
	cursor: pointer;
	&:hover {
		background-color: #ffffff52;
	}
`;

export const NewItemFormContainer = styled.div`
	width: 100%;
	max-width: 300px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export const NewItemButton = styled.button`
	padding: 6px 12px;
	border: none;
	border-radius: 3px;
	color: #fff;
	background-color: #5aac44;
	text-align: center;
	box-shadow: none;
`;

export const NewItemInput = styled.input`
	width: 100%;
	padding: 0.5rem 1rem;
	margin-bottom: 0.5rem;
	border: none;
	border-radius: 3px;
	box-shadow: #091e4240 0px 1px 0px 0px;
`;
