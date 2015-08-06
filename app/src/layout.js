import React from 'react'

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