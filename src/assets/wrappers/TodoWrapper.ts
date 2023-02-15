import styled from "styled-components";
interface IProps {
	isDone: boolean;
	onEdit: boolean;
}

const Wrapper = styled.div<IProps>`
	svg {
		background: rgba(0, 113, 255, 0.11);
		transition: background-color 1s;
		&:hover {
			background-color: rgba(0, 111, 255, 0.3);
			cursor: pointer;
		}
	}
	label {
		text-decoration-line: ${(props) => (props.isDone ? "line-through" : "")};
		display: ${(props) => (props.onEdit ? "none" : "inline-block")};
	}

	.icons {
		float: right;

		border: transparent;
		background: transparent;
		& > svg {
			margin: 0 0.2px;
		}
	}
	hr {
		border: 0.5px solid grey;
		border-radius: 10px;
	}

	input[type="text"] {
		display: ${(props) => (props.onEdit ? "inline-block" : "none")};
	}
`;

export default Wrapper;
