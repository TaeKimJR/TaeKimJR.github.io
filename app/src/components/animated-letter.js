import React from 'react'

export default React.createClass({
	displayName: 'AnimatedLetter',

	getInitialState () {
		return {
			opacity: 0
		}
	},

	componentDidMount () {
		var randomTime = ((Math.random() * this.props.timerMax) + this.props.timerMin) * 1000;
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
				{this.props.letter}
			</span>
		)
	}
})
