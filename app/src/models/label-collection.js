import Collection from 'ampersand-rest-collection'
import githubMixin from '../helpers/github-mixin'
import Label from './label'

export default Collection.extend(githubMixin, {
	// GET /repos/:owner/:repo/labels
	url () {
		return this.parent.url() + '/labels'
	},

	model: Label,
})