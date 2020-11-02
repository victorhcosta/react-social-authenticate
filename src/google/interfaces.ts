export interface IGoogleLoginInfos {
	readonly appId: string;
	/**
	 * @description the route your back-end application that will be responsible for authenticating
	 * the user in your app
	 * @param data returned by Google and sent in the body for internalAuthenticateURL
	 * expiresAt, expiresIn, idToken and accessToken
	 */
	readonly internalAuthenticateURL?: string;
}

export interface ICurrentUser {
	getAuthResponse(): IGoogleAuthResponse;
	getBasicProfile(): any;
	getGrantedScopes(): any;
	wc: IGoogleUserAuth;
	getId(): string;
}

export interface IGoogleAuthResponse {
	expires_in: number;
	first_issued_at: number;
	expires_at: number;
	token_type: string;
	login_hint: string;
	id_token: string;
	session_state: ISessionState;
	idpId: string;
}

export interface IGoogleAuth {
	signIn(): Promise<ICurrentUser>;
	disconnect(): Promise<any>;
	signOut(): Promise<any>;
	currentUser: {
		get(): ICurrentUser;
	};
}

export interface IGoogleUserAuth {
	token_type: string;
	access_token: string;
	scope: string;
	login_hint: string;
	id_token: string;
	idpId: string;
	session_state: ISessionState;
	expires_in: number;
	first_issued_at: number;
	expires_at: number;
}

interface ISessionState {
	extraQueryParams: {
		authuser: string;
	};
}
