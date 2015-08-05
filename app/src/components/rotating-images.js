import React from 'react'

export default React.createClass({
	displayName: 'RotatingImages',

	render () {
		return (
			<div className='rotating-images'>
				<div className='img-container'>
					<img src='http://placehold.it/350x150' className='img-element'/>
				</div>
			</div>
		)
	}
})
