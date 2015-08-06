import React from 'react'

export default React.createClass({
	displayName: 'ResponsiveSquareImage',

	render() {
		var imageStyle = {
			marginLeft: (this.props.centered ? 'auto': 'initial'),
			marginRight: (this.props.centered ? 'auto': 'initial'),
			width: ( this.props.imgWidth ? this.props.imgWidth : '100%' )
		}

		return (
			<div className='responsive-square-img' style={imageStyle}>
				<div className='img-container'>
					<img src={this.props.imgSrc} className='img-element'/>
				</div>
			</div>
		)
	}
})