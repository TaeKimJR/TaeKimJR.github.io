import React from 'react'

export default React.createClass({
	displayName: 'AnimatedLetter',

	getInitialState () {
		var { letter, timerMin, timerMax } = this.props

		return {
			letter: letter,
			timerMin: timerMin,
			timerMax: timerMax,
			opacity: 0
		}
	},

	componentDidMount () {
		var randomTime = ((Math.random() * this.state.timerMax) + this.state.timerMin) * 1000;
		var timeoutThis = this

		setTimeout(
			function(){
				timeoutThis._setOpacity(100)
			}, randomTime);
  },

  _setOpacity (opacity) {
  	this.setState({opacity: opacity})
  },

	render () {
		var letterStyle = {
			opacity: this.state.opacity
		}

		return (
			<span className='animated-letter' style={letterStyle}>
				{this.state.letter}
			</span>
		)
	}
})
