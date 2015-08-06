import app from 'ampersand-app'
import ampersandMixin from 'ampersand-react-mixin'
import React from 'react'

export default React.createClass({
	displayName: 'HalfCarousel',

	mixins: [ampersandMixin],

	widthHeightRatio: .70,
	rotationTime: 5000,

	getInitialState () {
		var { rotatedImages } = this.props

		return {
			rotatedImages: rotatedImages,
			currentDescription: rotatedImages[0].description,
			index: 0,
			position: 0,
			imageWidth: 0,
			imageHeight: 0,
			imageDescriptionOpacity: 1
		}
	},

  componentDidMount () {
  	this._handleResize();
    window.addEventListener( 'resize', this._handleResize );

    setInterval( this._rotateToNextImage, this.rotationTime );
  },

  componentWillUnmount () {
    window.removeEventListener( 'resize', this._handleResize );
  },

  _handleResize () {
		var imageWidth = window.innerWidth / 2
		var imageHeight = imageWidth * this.widthHeightRatio
		var position = ( this.state.index * imageWidth * -1 )

    this.setState({ imageWidth: imageWidth, imageHeight: imageHeight,  position: position });
  },

  _rotateToNextImage () {
  	var rotatedImagesLength = this.state.rotatedImages.length
  	var nextIndex = this.state.index + 1
  	var nextDescription = this.state.rotatedImages[nextIndex % rotatedImagesLength].description 

  	if(nextIndex == this.state.rotatedImages.length){
  		this.setState({ index: 0, position: 0 })
  	}
  	else{
	  	var nextPosition = ( this.state.imageWidth * nextIndex * -1 )
	  	this.setState({ index: nextIndex, position: nextPosition })
	  }

	  this._fadeOutInDescription(nextDescription)
  },

  _fadeOutInDescription (nextDescription) {
  	var self = this		// get scope

  	self.setState({ imageDescriptionOpacity: 0 })

  	setTimeout( function(){
  		self.setState({ currentDescription: nextDescription, imageDescriptionOpacity: 1 })
  	}, 1000 )
  },

	render () {
		var carouselStyle = {
			height: this.state.imageHeight
		}

		var imagesContainerStyle = {
			left: this.state.position,
			width: ( this.state.imageWidth * this.state.rotatedImages.length )
		} 

		var imageStyle = {
			width: this.state.imageWidth
		}

		var imageDescriptionStyle = {
			opacity: this.state.imageDescriptionOpacity
		}

		return (
			<div className='half-carousel-container' style={carouselStyle}>
				<div className='carousel-static-image'>
					<img src='http://cdn.omg-facts.com/2014/1/23/1f57c1b983aac1012d9fcdd181ef1734.jpg' />
				</div>
				<div className='carousel-rotating-images' >
					<div className='images-container' style={imagesContainerStyle}>
						{
				      this.state.rotatedImages.map(function(rotatedImage, index) {
				        return <img key={index} className='rotating-image' src={rotatedImage.src} style={imageStyle} />
				      })
				    }
					</div>

					<div ref='imageDescription' className='image-description' style={imageDescriptionStyle}>
						{this.state.currentDescription}
					</div>
				</div>
			</div>
		)
	}
})
