import React from 'react'
import AnimatedLetter from './animated-letter'

export default React.createClass({
	displayName: 'AnimatedText',

	getInitialState () {
		var { text } = this.props

		return {
			letterList: text.split(''),
		}
	},

	render () {
		var {letterList} = this.state

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
