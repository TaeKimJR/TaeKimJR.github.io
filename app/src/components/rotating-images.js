import React from 'react'
import SVGChooser from './svg-chooser'

export default React.createClass({
	displayName: 'RotatingImages',

	ANIMATION_DURATION: 1000,
	LEFT: 0,
	RIGHT: 1,

	getInitialState () {
		return {
			index: 0,
			left: 0,
			rightOrLeft: this.LEFT	// 0 = left, 1 = right
		}
	},

	componentDidMount () {
		var intervalThis = this

		setInterval(
			function(){
				intervalThis._rotateImage();
			}, this.props.timer);
  },

  _rotateImage () {
  	// TODO: WE NEED TO MAKE THESE ASYNC, in a better way
  	this._fadeOutImage()
  	this._nextImage()
  	this._fadeInImage()
  },

  _nextImage () {
		var timeoutThis = this  	

		setTimeout(
  		function(){
  			var svgListLength = timeoutThis.props.svgList.length
				var nextIndex = ( timeoutThis.state.index + 1 ) % svgListLength

				timeoutThis.setState({index: nextIndex})
  		}, timeoutThis.ANIMATION_DURATION)  	
  },

  _fadeOutImage () {
  	if(this.state.rightOrLeft === this.LEFT){
  		this.setState({left: -5000, rightOrLeft: this.RIGHT})
  	}
  	else{
  		this.setState({left: 5000, rightOrLeft: this.LEFT})
  	}
  },

  _fadeInImage () {
  	var timeoutThis = this

  	setTimeout(
			function(){
				timeoutThis.setState({left: 0})
			}, timeoutThis.ANIMATION_DURATION)  	
  },

	render () {
		var currentIndex = this.state.index
		var svgList = this.props.svgList
		var svgType = svgList[currentIndex]

		var imageStyle = {
			left: this.state.left
		}

		return (
			<div className='rotating-images'>
				<div className='img-container'>
					<SVGChooser svgType={svgType} />
				</div>
			</div>
		)
	}
})
