import SpotifyWebApi from 'spotify-web-api-node';

const SCOPES = ['user-library-read', 'playlist-modify-private', 'user-read-playback-state'];

export function getAuthUrl(clientId: string): string {
	const redirectUri = 'https://example.com/callback',
		state = 'some-state-of-my-choice';

	// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
	const spotifyApi = new SpotifyWebApi({
		redirectUri: redirectUri,
		clientId: clientId,
	});

	// Create the authorization URL
	const authorizeURL = spotifyApi.createAuthorizeURL(SCOPES, state);

	// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
	console.log(authorizeURL);
	return authorizeURL;
}
