import SpotifyWebApi from 'spotify-web-api-node';

const redirectUri = 'https://example.com/callback';
export class Spotify {
	client: SpotifyWebApi;
	constructor(clientId: string, clientSecret: string, code: string) {
		console.log(clientId, clientSecret);
		this.client = new SpotifyWebApi({
			clientId,
			clientSecret,
			redirectUri,
		});
	}

	async fetchToken(code) {
		const result = await this.client.authorizationCodeGrant(code);
		this.client.setAccessToken(result.body.access_token);
		this.client.setRefreshToken(result.body.refresh_token);
		//this.client.refreshAccessToken()
	}
}
