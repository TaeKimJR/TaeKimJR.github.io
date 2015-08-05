import React from 'react'
import Header from './components/header'

export default React.createClass({
	displayName: 'Layout',

	render () {
		return (
			<div>
		  	{this.props.children}
		  </div>
		)
	}
})