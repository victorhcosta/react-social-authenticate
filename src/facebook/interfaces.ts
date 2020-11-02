import { facebookConnectionStatus } from './types';

export interface IFacebookLoginInfos {
	readonly version: number;
	readonly appId: string;
	readonly language: string;
	/**
	 * @description the route of your back-end application that will be responsible for authenticating
	 * the user in your app
	 * @param data returned by Facebook and sent in the body for internalAuthenticateURL
	 * accessToken, dataAccessExpirationTime, expiresIn and userID
	 */
	readonly internalAuthenticateURL?: string;
	/**
	 * @description fields that you want to receive from Facebook
	 */
	readonly fields?: string[];
	readonly xfbml?: boolean;
	readonly cookie?: boolean;
}

export interface IUserAuthResponse {
	accessToken: string;
	expiresIn: number;
	signedRequest: string;
	userID: string;
	grantedScopes?: string;
	reauthorize_required_in?: number;
	data_access_expiration_time: number;
	graphDomain: string;
}

export interface IFacebookLoginResponse {
	status: facebookConnectionStatus;
	authResponse?: IUserAuthResponse;
}

export interface IFaceBookUserInfos {
	id?: string;
	name?: string;
	first_name?: string;
	last_name?: string;
	short_name?: string;
	picture?: {
		data: IPicture;
	};
	birthday?: string;
	hometown?: IHometown;
	gender?: string;
}

interface IHometown {
	id?: string;
	name?: string;
}

interface IPicture {
	height?: number;
	width?: number;
	is_silhouette?: boolean;
	url?: string;
	cache_key?: string;
}
