import app from 'ampersand-app'
import React from 'react'
import LocalLinks from 'local-links'

export default React.createClass({
	displayName: 'NavHandler',

	onClick (event) {
		const pathname = LocalLinks.getLocalPathname(event)

		if(pathname) {
			event.preventDefault()

			app.Router.history.navigate(pathname)
		}		
	},

	render () {
		return (
			<div {...this.props} onClick={this.onClick}>
				{this.props.children}
			</div>			
		)
	}
})