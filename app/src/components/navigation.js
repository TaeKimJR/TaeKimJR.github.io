import React from 'react'
import ResponsiveSquareImg from './responsive-square-image'

export default React.createClass({
	displayName: 'Navigation',

	render() {
		return (
			<div className='navigation'>
				<ul>
					<li>
						<ResponsiveSquareImg imgSrc='http://placehold.it/350x150' imgWidth='8vh' centered={true}/>
						<h1>Porfolio</h1>
					</li>
					<li>
						<ResponsiveSquareImg imgSrc='http://placehold.it/350x150' imgWidth='8vh' centered={true}/>
						<h1>Blog</h1>
					</li>
				</ul>
			</div>
		)
	}
})