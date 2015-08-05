import React from 'react'
import RotatingImages from './../components/rotating-images'
import AnimatedText from './../components/animated-text'
import RotatingText from './../components/rotating-text'

export default React.createClass({
	displayName: 'TKJR',

	render() {
		var imageSrcList = ['http://placehold.it/350x150', 'http://placehold.it/250x150', 'http://placehold.it/150x150']

		return (
			<div className='home'>
				<div className='image-container'>
					<RotatingImages imageSrcList={imageSrcList} timer={3000}/>
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