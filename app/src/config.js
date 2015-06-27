const config = {
	'localhost': {
		githubAuthUrl: 'https://github.com/login/oauth/authorize',
		authUrl: 'https://labelr-dev.herokuapp.com/authenticate',
		clientId: 'f8dd69187841cdd22a26'
	},

	'baymaxsaysso.surge.sh' : {
		githubAuthUrl: 'https://github.com/login/oauth/authorize',
		authUrl: 'https://labelr-dev.herokuapp.com/authenticate',
		clientId: 'f8dd69187841cdd22a26'
	}
}[location.hostname]

export default config