import { Spotify } from './spotify';

describe('when inializing the spotify api', () => {
	it('should create a spotify client', () => {
		const client = new Spotify('x', 'y');
	});
});
