import 'react';

import styled, { createGlobalStyle } from 'styled-components';

interface IColors {
	bg: string;
	text: string;
	borderBottom: string;
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 10px 'Commissioner', sans-serif;
	font-size: 20px;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
`;

export const PageTitle = styled.h1`
	text-align: center;
	margin: 1.2em auto;
`;

export const CardsContainer = styled.main`
	margin: 1.5em;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Card = styled.section`
    background-color: ${(props: IColors) => props.bg};
	width: 25em;
	height: 10em;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	margin: auto .5em;
	border: 3px solid ${(props: IColors) => props.borderBottom};
	box-sizing: content-box;
	overflow-x: hidden;
	color: ${(props: IColors) => props.text};

	.title {
		width: 100%;
		text-align: center;
		border-bottom: 1px solid ${(props: IColors) => props.borderBottom};
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.footer {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}

`;
