import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import {
	IFacebookLoginInfos,
	IFacebookLoginResponse,
	IFaceBookUserInfos,
	IUserAuthResponse,
} from './interfaces';

const customWindow: any = window;

const facebookLoginDefaultParams: Partial<IFacebookLoginInfos> = {
	cookie: false,
	xfbml: false,
	fields: ['name', 'email', 'picture'],
};

/**
 * @description React hook for authentication with Facebook
 * internalUser is the return of your own login app
 */
export const useFacebookLogin = <T>(facebookLoginParams: IFacebookLoginInfos) => {
	const facebookLoginInfos = {
		...facebookLoginDefaultParams,
		...facebookLoginParams,
	};
	const facebookSDKId = 'facebook-jssdk';
	const { language } = facebookLoginInfos;

	const [user, setUser] = useState<IFaceBookUserInfos>();
	const [userLogin, setUserLogin] = useState<IUserAuthResponse>();
	const [internalUser, setInternalUser] = useState<T>();
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		(() => {
			if (!document.getElementById(facebookSDKId)) {
				const element = document.getElementsByTagName('script')[0];
				let scriptElement = document.createElement('script') as HTMLScriptElement;

				scriptElement.id = facebookSDKId;
				scriptElement.src = `https://connect.facebook.net/${language}/sdk.js`;

				if (element?.parentNode) {
					element.parentNode.insertBefore(scriptElement, element);
				} else {
					document.head.appendChild(scriptElement);
				};

				setLoaded(true);
			}
		})();

		return () => {
			const element = document.getElementById(facebookSDKId);

			if (element) element.parentNode?.removeChild(element);
		};
	}, []);

	useEffect(() => {
		const facebookInit = {
			version: `v${facebookLoginInfos?.version.toFixed(1)}`,
			appId: facebookLoginInfos?.appId,
			xfbml: facebookLoginInfos?.xfbml,
			cookie: facebookLoginInfos?.cookie,
		};

		customWindow.fbAsyncInit = () => customWindow?.FB?.init(facebookInit);
	}, [facebookLoginInfos]);

	const authenticate = (response: IFacebookLoginResponse) => {
		if (response.authResponse) setUserLogin(response.authResponse);

		if (response.status === 'connected') {
			const requestParams = {
				locale: facebookLoginInfos?.language,
				fields: facebookLoginInfos?.fields?.join(','),
			};

			customWindow?.FB?.api(
				'/me',
				requestParams,
				(user: IFaceBookUserInfos) => {
					if (facebookLoginInfos.internalAuthenticateURL) {
						const userData = {
							accessToken: response.authResponse?.accessToken,
							dataAccessExpirationTime: response.authResponse?.data_access_expiration_time,
							expiresIn: response.authResponse?.expiresIn,
							userID: response.authResponse?.userID,
						};

						axios
							.post(
								facebookLoginInfos.internalAuthenticateURL,
								userData,
							)
							.then(({ data }: AxiosResponse<T>) =>
								setInternalUser(data),
							)
							.catch(error => new Error(error))
							.finally(() => setUser(user));
					} else {
						setUser(user);
					}
				},
			);
		}
	};

	const logIn = () =>
		customWindow?.FB?.login(
			(loginResponse: IFacebookLoginResponse) =>
				authenticate(loginResponse),
			true,
		);

	const logOut = () => {
		customWindow?.FB?.logout();
		setInternalUser(undefined);
		setUser(undefined);
	};

	return {
		userInfos: user,
		userLogin,
		loaded,
		internalUser,
		logIn,
		logOut,
	};
};
