import React from 'react'
import RotatingImages from './../components/rotating-images'
import AnimatedText from './../components/animated-text'
import RotatingText from './../components/rotating-text'
import NavSlider from './../components/nav-slider'
import ContactForm from './../components/contact-form'
import Router from 'react-router'
var { RouteHandler } = Router;

var svgList = [
	'denver',
	'freewheel',
	'denver',
	'turbine',
	'baymax'
]

var textList = [
	'Front-Web-Dev', 														
	'Free-Wheel', 												
	'Denverite', 													
	'... but from Iowa!', 								
	'Ba la la la la la...',
	'I <3 JS'
]

var pageTitle = 'Tae Kim'

export default React.createClass({
	displayName: 'TKJR',

	componentDidMount () {
    document.title = pageTitle;
  },

	render () {
		return (
			<div className='home'>
				<div className='container'>
					<div className='image-container'>
						<RotatingImages svgList={svgList} timer={5000} />
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

				<RouteHandler />
			</div>
		)
	}
})