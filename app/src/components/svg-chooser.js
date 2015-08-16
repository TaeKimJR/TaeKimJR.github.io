import React from 'react'
import FreeWheelSVG from './svg/free-wheel'
import BaymaxSVG from './svg/baymax'

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
