import React from 'react'

export default React.createClass({
	displayName: 'RotatingImages',

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
				intervalThis._rotateImage();
			}, this.props.timer);
  },

  _rotateImage () {
  	// TODO: WE NEED TO MAKE THESE ASYNC, one after the other
  	this._fadeOutImage()
  	this._nextImage()
  	this._fadeInImage()
  },

  _nextImage () {
  	var imageListLength = this.props.imageSrcList.length
		var nextIndex = ( this.state.index + 1 ) % imageListLength

		this.setState({index: nextIndex})
  },

  _fadeOutImage () {
		this.setState({opacity: 0})
  },

  _fadeInImage () {
  	this.setState({opacity: 100})
  },

	render () {
		var currentIndex = this.state.index
		var imageList = this.props.imageSrcList
		var imageSrc = imageList[currentIndex]

		var imageStyle = {
			opacity: this.state.opacity
		}

		return (
			<div className='rotating-images'>
				<div className='img-container'>
					<img src={imageSrc} className='img-element' style={imageStyle}/>
				</div>
			</div>
		)
	}
})
