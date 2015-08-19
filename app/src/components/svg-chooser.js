import React from 'react'
import FreeWheelSVG from './svg/free-wheel'
import BaymaxSVG from './svg/baymax'
import TurbineSVG from './svg/turbine'

export default React.createClass({
	displayName: 'SVGChooser',

	renderSVG () {
    switch (this.props.svgType) {
      case 'freewheel':
        return (
        	<FreeWheelSVG />
        );
      case 'baymax':
        return (
          <BaymaxSVG />
        );
      case 'turbine':
        return (
          <TurbineSVG />
        );
    }
  },

	render () {
		return (
			<div className='svg-chooser'>
				{this.renderSVG()}
			</div>
		)
	}
})
