import React from 'react'

export default React.createClass({
	displayName: 'Layout',

	componentDidMount: function() {
    document.title = "TAE KIM";

    // remove ios address bar
		window.addEventListener("load",function() {
			setTimeout(function(){
				// Hide the address bar!
				window.scrollTo(0, 1);
			}, 0);
		});
  },

	render () {
		return (
			<div>
		  	{this.props.children}
		  </div>
		)
	}
})