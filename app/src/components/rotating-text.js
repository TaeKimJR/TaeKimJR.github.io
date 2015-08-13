import React from 'react'

export default React.createClass({
	displayName: 'RotatingText',

	ANIMATION_DURATION: 1000,

	getInitialState () {
		return {
			index: 0,
			opacity: 100
		}
	},

	componentDidMount () {
		var intervalThis = this

		setInterval(
			function(){
				intervalThis._rotateText();
			}, this.props.timer)
  },

  _rotateText () {
  	// TODO: WE NEED TO MAKE THESE ASYNC, in a better way
  	this._fadeOutText()
  	this._nextText()
  	this._fadeInText()
  },

  _nextText () {
  	var timeoutThis = this

  	setTimeout(
  		function(){
  			var textListLength = timeoutThis.props.textList.length
				var nextIndex = ( timeoutThis.state.index + 1 ) % textListLength

				timeoutThis.setState({index: nextIndex})
  		}, timeoutThis.ANIMATION_DURATION)  	
  },

  _fadeOutText () {
		this.setState({opacity: 0})
  },

  _fadeInText () {
  	var timeoutThis = this

  	setTimeout(
  		function(){
				timeoutThis.setState({opacity: 100})
  		}, timeoutThis.ANIMATION_DURATION + 400)
  },

	render () {
		var currentIndex = this.state.index
		var textList = this.props.textList
		var text = textList[currentIndex]

		var textStyle = {
			opacity: this.state.opacity
		}

		return (
			<div className='rotating-text'>
				<div className='text-container'>
					<span style={textStyle}>{text}</span>
				</div>				
			</div>
		)
	}
})
