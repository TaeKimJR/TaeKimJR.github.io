import React from 'react'
import RotatingImages from './../components/rotating-images'
import AnimatedText from './../components/animated-text'
import RotatingText from './../components/rotating-text'

export default React.createClass({
	displayName: 'TKJR',

	render() {

		return (
			<div className='home'>
				<div className='image-container'>
					<RotatingImages />
				</div>
				<div className='name-container'>
					<AnimatedText text='Tae Kim' />
				</div>
				<div className='description-container'>
					<RotatingText />
				</div>
			</div>
		)
	}
})