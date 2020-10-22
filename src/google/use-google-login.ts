import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

import {
	IGoogleAuth,
	IGoogleAuthResponse,
	IGoogleLoginInfos,
	IGoogleUserAuth,
} from './interfaces';

const customWindow: any = window;

export const useGoogleLogin = <T>(googleLoginInfos: IGoogleLoginInfos) => {
	const params = {
		client_id: googleLoginInfos.appId,
		access_type: '',
	};

	const googleSDKId = 'google-login';

	const [loaded, setLoaded] = useState(false);
	const [internalUser, setInternalUser] = useState<T>();
	const [authSDK, setAuthSDK] = useState<IGoogleAuth>();
	const [user, setUser] = useState<IGoogleAuthResponse>();
	const [userLogin, setUserLogin] = useState<IGoogleUserAuth>();

	const loadScript = () => {
		if (!document.getElementById(googleSDKId)) {
			const element = document.getElementsByTagName('script')[0];
			let scriptElement = document.createElement('script') as HTMLScriptElement;

			scriptElement = document.createElement('script');
			scriptElement.id = googleSDKId;
			scriptElement.src = 'https://apis.google.com/js/api.js';

			if (element && element.parentNode) {
				element.parentNode.insertBefore(scriptElement, element);
			} else {
				document.head.appendChild(scriptElement);
			}

			scriptElement.onload = () => setLoaded(true);
		}
	};

	const removeScript = () => {
		const element = document.getElementById(googleSDKId);

		if (element) element.parentNode?.removeChild(element);
	};

	useEffect(() => {
		loadScript();

		return removeScript;
	}, []);

	useEffect(() => {
		if (loaded) {
			customWindow.gapi.load('auth2', () => {
				customWindow.gapi.auth2
					.init(params)
					.then(() => setAuthSDK(customWindow.gapi.auth2.getAuthInstance()))
					.then(() => {
						if(authSDK) {
							setUserLogin(authSDK.currentUser.get().wc);
						}
					});
			});
		}
	}, [loaded]);

	const logIn = () => {
		if (authSDK) {
			authSDK.signIn()
				.then(res => {
					if (googleLoginInfos.internalAuthenticateURL) {
						const userData = {
							expiresAt: res.getAuthResponse().expires_at,
							expiresIn: res.getAuthResponse().expires_in,
							idToken: res.getAuthResponse().id_token,
							accessToken: authSDK.currentUser.get().wc.access_token,
						};

						axios
							.post(googleLoginInfos.internalAuthenticateURL, userData,)
							.then(({ data }: AxiosResponse<T>) => setInternalUser(data))
							.catch(error => new Error(error))
							.finally(() => {
								setUserLogin(authSDK.currentUser.get().wc);
								setUser(res.getAuthResponse());
							});
					} else {
						setUserLogin(authSDK.currentUser.get().wc);
						setUser(res.getAuthResponse());
					};
				});
		};
	};

	const logOut = () => {
		if (authSDK) {
			authSDK.signOut();
			setInternalUser(undefined);
			setUser(undefined);
			authSDK.disconnect();
		};
	};

	return {
		userInfos: user,
		userLogin,
		internalUser,
		loaded,
		logIn,
		logOut,
	};
};
