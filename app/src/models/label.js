import Model from 'ampersand-model'
import xhr from 'xhr'
import githubMixin from '../helpers/github-mixin'

export default Model.extend(githubMixin, {
	idAttribute: 'name',

	props: {
		name: 'string',
		color: 'string'
	},

	session: {
		editing: {
			type: 'boolean',
			default: false
		},
		saved: {
			type: 'boolean',
			default: true
		}
	},

	isNew () {
		return !this.saved
	},

	update(attributes) {
		debugger
		const oldAttributes = this.getAttributes({props: true, session: false})
		xhr({
			url: this.url(),
			json: attributes,
			method: 'PATCH',
			headers: {
				authorization: 'token ' + app.me.token
			}
		}, (err, req, body) => {
			if(err){
				debugger
				this.set(oldAttributes)
			}
		})
		this.set(attributes)

	}
})