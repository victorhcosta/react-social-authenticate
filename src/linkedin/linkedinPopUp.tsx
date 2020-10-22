import React from 'react';

import { ILinkedinAccessTokenEvent } from './interfaces';

export const LinkedinLoginPopUp = () => {
	const query = new URLSearchParams(window.location.search);

	const message: ILinkedinAccessTokenEvent = {
		accessToken: query.get('code') || '',
		state: query.get('state') || '',
		from: 'linkedinAccessToken'
	};

	window?.opener?.postMessage(message);
	window.close();

	return null
}
