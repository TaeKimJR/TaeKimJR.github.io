import React from 'react'

export default React.createClass({
	displayName: 'Layout',

	componentDidMount: function() {
    document.title = "TAE KIM";
  },

	render () {
		return (
			<div>
		  	{this.props.children}
		  </div>
		)
	}
})