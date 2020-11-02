export interface ILinkedinLoginParams {
	scopes: string[];
	clientId: string;
	redirecURI: string;
	state: string;
	/**
	 * @description the route your back-end application that will be responsible for authenticating
	 * the user in your app
	 */
	internalAuthenticateURL?: string;
	/**
	 * @default true
	 * @description pass false for open the Linkedin auth page in the same tab of your app, and true to open a new window
	 * when using popup you can use the LinkedinLoginPopUp component as a route
	 */
	usePopUp: boolean;
}

export interface ILinkedinAccessTokenEvent {
	accessToken: string;
	state: string;
	readonly from: 'linkedinAccessToken';
}
