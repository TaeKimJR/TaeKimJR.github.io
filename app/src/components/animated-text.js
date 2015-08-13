import React from 'react'
import AnimatedLetter from './animated-letter'

export default React.createClass({
	displayName: 'AnimatedText',

	render () {
		var letterList = this.props.text.split('')

		return (
			<div className='animated-text'>
				
				{letterList.map((letter, index) => {
						return (
							<AnimatedLetter key={index} letter={letter} timerMin={0} timerMax={2} />
						)
					})}

			</div>
		)
	}
})
