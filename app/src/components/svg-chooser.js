import React from 'react'
import FreeWheelSVG from './svg/free-wheel'

export default React.createClass({
	displayName: 'SVGChooser',

	renderSVG () {
    switch (this.props.svgType) {
      case 'freewheel':
        return (
        	<FreeWheelSVG />
        );
      case 'denver':
        return (
          <h1>HELLO WORLD</h1>
        );
    }
  },

	render () {
		return (
			<div>
				{this.renderSVG()}
			</div>
		)
	}
})
