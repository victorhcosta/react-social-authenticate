import React from 'react';

import {
	useFacebookLogin,
	useGoogleLogin,
	useLinkedinLogin
} from '../../src';

import {
	Card,
	PageTitle,
	CardsContainer
} from '../styles';

interface IExampleLogin {
	token: string,
	user: {
		name: string,
		id: string,
		email: string,
		roles: [
			{
				name: string,
				id: number
			}
		]
	}
};

export const LoginPage = () => {
	const facebook = useFacebookLogin<IExampleLogin>({
		appId: '400876884132199',
		language: 'pt-BR',
		version: 8.0,
		// internalAuthenticateURL: 'http://localhost:5000/external-login',
	});

	const google = useGoogleLogin<IExampleLogin>({
		appId: '629543803710-ob9j9a1p37h4coj3v0m2g4p2dq020vpe.apps.googleusercontent.com',
		// internalAuthenticateURL: 'http://localhost:5000/external-login',
	});

	const linkedin = useLinkedinLogin<IExampleLogin>({
		clientId: '78oexafsv1s11q',
		redirecURI: 'https://localhost:1234/login/social',
		scopes: ['r_liteprofile'],
		state: '123sa556as',
		usePopUp: true
	});

	return (
		<>
			<PageTitle> React Social Login Playground </PageTitle>
			<CardsContainer>
				<Card bg='#16a8fc' text='#FFF' borderBottom='rgb(100, 100, 100)'>
					<h1 className='title'> Facebook </h1>
					<div className='content'>
						Accesstoken:
						<p>
							{facebook?.userLogin?.accessToken.substring(0, 20)}
							{facebook?.userLogin?.accessToken && facebook?.userLogin?.accessToken?.length > 20 ? '...' : ''}
						</p>
					</div>
					<footer className='footer'>
						<div className="fb-login-button" data-size="large" data-button-type="continue_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false" data-width=""></div>
						<button className='btn btn-success' onClick={facebook?.logIn}> login </button>
						<button className='btn btn-danger' onClick={facebook?.logOut}> logout </button>
					</footer>
				</Card>

				<Card bg='#FFF' text='#4285f4' borderBottom='#4285f4'>
					<h1 className='title'> Google </h1>
					<div className='content'>
						Accesstoken:
						<p>
							{google?.userLogin?.access_token.substring(0, 20)}
							{google?.userLogin?.access_token && google?.userLogin?.access_token.length > 20 ? '...' : ''}
						</p>
					</div>
					<footer className="footer">
						<button className='btn btn-success' onClick={google?.logIn}> login </button>
						<button className='btn btn-danger' onClick={google?.logOut}> logout </button>
					</footer>
				</Card>

				<Card bg='#0077b5' text='#FFF' borderBottom='#283e4a'>
					<h1 className='title'> Linkedin </h1>
					<div className='content'>
						Accesstoken:
						<p>
							{linkedin.accessToken.substring(0, 20)}
							{linkedin.accessToken && linkedin.accessToken.length > 20 ? '...' : ''}
						</p>
					</div>
					<footer className="footer">
						<button className='btn btn-success' onClick={linkedin.login}> login </button>
						<button className='btn btn-danger' onClick={linkedin.logout}> logout </button>
					</footer>
				</Card>
			</CardsContainer>
		</>
	);
};
