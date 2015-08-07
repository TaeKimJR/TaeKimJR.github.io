import React from 'react'

export default React.createClass({
	displayName: 'Layout',

	componentDidMount: function() {
    document.title = "TAE KIM";

    this._initNoScroll();
  },

  _initNoScroll () {
  	window.addEventListener( 'scroll', function (){
  		window.scrollTo(0, -10);
  	} );
  },

	render () {
		return (
			<div>
		  	{this.props.children}
		  </div>
		)
	}
})