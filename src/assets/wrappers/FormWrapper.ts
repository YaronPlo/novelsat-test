import styled from "styled-components";

const Wrapper = styled.form`
	position: sticky;
	top: 80%;
	display: flex;
	flex-direction: column;
	gap: 5px;
	margin: 5px;

	.btn {
		display: flex;
		justify-content: space-between;
	}

	.input {
		display: flex;
		width: 100%;
		& > span,
		.input-field {
			white-space: nowrap;
			display: block;
			&:first-child {
				border-radius: 6px 0 0 6px;
			}
			&:last-child {
				border-radius: 0 6px 6px 0;
				margin-left: -1px;
			}
		}

		.input-field {
			position: relative;
			z-index: 1;
			flex: 1 1 auto;
			width: 1%;
			margin-top: 0;
			margin-bottom: 0;
		}
		& > span {
			text-align: center;
			padding: 0px 6px;
			color: var(--group-color);
			background: var(--group-background);
			border: 1px solid var(--group-border);
			transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
		}
		&:focus-within > span {
			color: var(--group-color-focus);
			background: var(--group-background-focus);
			border-color: var(--group-border-focus);
		}
	}
`;

export default Wrapper;
