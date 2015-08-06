import React from 'react'
import RotatingImages from './../components/rotating-images'
import AnimatedText from './../components/animated-text'
import RotatingText from './../components/rotating-text'
import NavSlider from './../components/nav-slider'
import ContactForm from './../components/contact-form'
import Navigation from './../components/navigation'

export default React.createClass({
	displayName: 'TKJR',

	render() {
		var imageSrcList = ['http://placehold.it/350x150', 'http://placehold.it/250x150', 'http://placehold.it/150x150']
		var textList = ['text1', 'text2', 'text3']

		return (
			<div className='home'>
				<div className='container'>
					<div className='image-container'>
						<RotatingImages imageSrcList={imageSrcList} timer={5000} />
					</div>
					<div className='name-container'>
						<AnimatedText text='Tae Kim' />
					</div>
					<div className='description-container'>
						<RotatingText textList={textList} timer={5000} />
					</div>
				</div>

				<div className='nav-container'>
					<NavSlider>
						<ContactForm />
					</NavSlider>
				</div>
			</div>
		)
	}
})