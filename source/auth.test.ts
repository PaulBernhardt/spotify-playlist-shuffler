import { getAuthUrl } from './auth';

describe('when doing initial auth', () => {
	it('should generate an auth URL', () => {
		const clientId = '5fe01282e44241328a84e7c5cc169165';
		const auth = getAuthUrl(clientId);
		expect(auth).toMatch('https://accounts.spotify.com:443/authorize');
	});
});
