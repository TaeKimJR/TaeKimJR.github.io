import React from 'react'

export default React.createClass({
	displayName: 'NavSlider',

	scrollUp: 'up',
	scrollDown: 'down',

	getInitialState () {
		return {
			circleTop: 0,
			lineTop: 0,
			contentMargin: '100vh',
			opened: false
		}
	},

	toggleNav () {
		if(this.state.opened){
			this.setState({opened: false, circleTop: 0, lineTop: 0, contentMargin: '100vh'})
		}
		else{
			this.setState({opened: true, circleTop: 'calc(-100vh + 60px + 120px)', lineTop: 'calc(-100vh + 45px)', contentMargin: '0vh'})
		}
	},

	render() {
		var navButtonCircleStyle = {
			top: this.state.circleTop
		}

		var navButtonLineStyle = {
			top: this.state.lineTop
		}

		var navContentStyle = {
			marginTop: this.state.contentMargin
		}

		return (
			<div className='nav-slider'>
				<div className='nav-button' onClick={this.toggleNav}>
					<div className='circle-button' style={navButtonCircleStyle}>
						<div className='placeholder'>
							<div className='triple-line'></div>
							<div className='triple-line'></div>
							<div className='triple-line'></div>
						</div>
					</div>
					<div className='line' style={navButtonLineStyle}></div>
				</div>
				<div className='nav-content' style={navContentStyle}>
					{this.props.children}
				</div>
			</div>
		)
	}
})