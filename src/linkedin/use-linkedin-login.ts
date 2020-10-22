import { useEffect, useState } from 'react';

import axios, { AxiosResponse } from 'axios';

import { ILinkedinAccessTokenEvent, ILinkedinLoginParams } from './interfaces';

export const useLinkedinLogin = <T>(linkedinLoginParams: ILinkedinLoginParams) => {
	const [internalUser, setInternalUser] = useState<T>();
	const [accessToken, setAccessToken] = useState('');

	useEffect(() => {
		addEventListener('message', (eventData: MessageEvent) => {
			const params: ILinkedinAccessTokenEvent = eventData.data;
				if (params.from === 'linkedinAccessToken')
					setAccessToken(params.accessToken);
			},
		);

		return () => removeEventListener('message', () => {});
	}, []);

	useEffect(() => {
		if(accessToken && linkedinLoginParams.internalAuthenticateURL) {
			axios
				.post(linkedinLoginParams.internalAuthenticateURL, { accessToken })
				.then((response: AxiosResponse<T>) => setInternalUser(response.data));
		};
	}, [accessToken]);

	const login = () => {
		const params = [
			`response_type=code`,
			`client_id=${linkedinLoginParams.clientId}`,
			`redirect_uri=${linkedinLoginParams.redirecURI}`,
			`state=${linkedinLoginParams.state}`,
			`scope=${linkedinLoginParams.scopes.join(',')}`,
		];

		const url = `https://www.linkedin.com/oauth/v2/authorization?${params.join('&')}`;

		if (linkedinLoginParams.usePopUp) {
			window.open(url, '', 'width=400,height=400');
		} else {
			window.open(url, '_self');
		};
	};

	const logout = () => {
		const logoutWindow = window.open('https://linkedin.com/m/logout', '', 'width=400,height=400');

		setTimeout(() => {
			logoutWindow?.close();
			setInternalUser(undefined);
			setAccessToken('');
		}, 1000);
	};

	return {
		internalUser,
		accessToken,
		login,
		logout,
	};
};
