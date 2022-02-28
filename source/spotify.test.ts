import { Spotify } from './spotify';

describe('when inializing the spotify api', () => {
	it('should create a spotify client', () => {
		const spotify = new Spotify('x', 'y', 'z');
		expect(spotify.client.getClientId()).toBe('x');
		expect(spotify.client.getClientSecret()).toBe('y');
		//expect(spotify.client.getAccessToken()).toBe('z');
	});
});
