import React from 'react'

export default React.createClass({
	displayName: 'Header',

	render () {
		return (
			<div className='page-header'>
				<div className='title'>
					Tae Kim <span className='description'>web developer</span>
				</div>

				<ul className='nav-items'>
					<li><a href=''>Me</a></li>
					<li><a href=''>Sketchpad</a></li>
					<li><a href=''>Let&#39;s Talk</a></li>
				</ul>
			</div>
		)
	}
})
