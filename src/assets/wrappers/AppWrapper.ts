import styled from "styled-components";

const Wrapper = styled.div`
	position: relative;
	background-color: rgba(95, 95, 199, 0.29);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.3s;
	position: relative;
	width: 50vw;
	height: 85vh;
	margin: 0 auto;
	padding: 10px;
	overflow-y: auto;
	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;

export default Wrapper;
