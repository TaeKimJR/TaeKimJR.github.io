import React from 'react'
import Header from './components/header'

export default React.createClass({
	displayName: 'Layout',

	render () {
		return (
			<div>
			  <Header />
			  <div className='container'>
			  	{this.props.children}
			  </div>
		  </div>
		)
	}
})