import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import Labels from '../components/label-collection'

export default React.createClass({
	displayName: 'RepoDetail',

	mixins: [ampersandMixin],

	onAddClick () {
		this.props.labels.add({
			name: '',
			color: '',
			editing: true,
			saved: false
		}, {at: 0})
	},

	render() {
		const {repo} = this.props

		return (
			<div className='container'>
				<h1>{repo.full_name}</h1>
			  <p onClick={this.onAddClick} className='button'>Add New</p>
			  <Labels labels={repo.labels} />
		  </div>
		)
	}
})