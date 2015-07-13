import React from 'react'
import HalfCarousel from '../components/half-carousel'
import About from '../components/about'

export default React.createClass({
	displayName: 'TKJR',

	render() {
		var rotatedImages = [
			{
				src: 'http://www.flickeringmyth.com/wp-content/uploads/2014/08/Jackie-Chan-pics.jpeg',
				description: 'HELLO WORLD'
			},
			{
				src: 'http://www.jpopasia.com/i1/celebrities/1/22600-jackiechan-xkup.jpg',
				description: 'SECOND IMAGE'
			},
			{
				src: 'http://bollyspice.com/wp-content/uploads/2014/03/14mar_JackieChan-FellowshipAward.jpg',
				description: 'RAWR'
			}
		]

		return (
			<div>
				<HalfCarousel rotatedImages={rotatedImages} />
				<About />
			</div>
		)
	}
})