export interface ILinkedinLoginParams {
	scopes: string[];
	clientId: string;
	redirecURI: string;
	state: string;
	internalAuthenticateURL?: string;
	usePopUp: boolean;
}

export interface ILinkedinAccessTokenEvent {
	accessToken: string;
	state: string;
	readonly from: 'linkedinAccessToken';
}
