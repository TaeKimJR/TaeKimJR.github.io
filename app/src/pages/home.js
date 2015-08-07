import React from 'react'
import RotatingImages from './../components/rotating-images'
import AnimatedText from './../components/animated-text'
import RotatingText from './../components/rotating-text'
import NavSlider from './../components/nav-slider'
import ContactForm from './../components/contact-form'

export default React.createClass({
	displayName: 'TKJR',

	render() {
		var imageSrcList = [
			'https://placehold.it/350x150', 
			'https://placehold.it/250x150', 
			'https://placehold.it/150x150', 
			'https://placehold.it/150x150', 
			'https://placehold.it/150x150', 
			'https://placehold.it/150x150'  
		]
		var textList = [
			'Front-Web-Dev', 														
			'Free-Wheel', 												
			'Denverite', 													
			'... but from Iowa!', 								
			'Ba la la la la la...',
			'I <3 JS'
		]

		return (
			<div className='home'>
				<div className='container'>
					<div className='image-container'>
						<RotatingImages imageSrcList={imageSrcList} timer={5000} />
					</div>
					<div className='name-container'>
						<AnimatedText text='TAE KIM' />
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