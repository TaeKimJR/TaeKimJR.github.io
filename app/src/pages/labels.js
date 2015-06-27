import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
	mixins: [ampersandMixin],

	render() {
		const {labels} = this.props

		return (
			<ul>
					{labels.map((label) => {
						return (
							<li key={label.name}>
								<span>Name: {label.name}</span><br/>
								<span>Color: {label.color}</span>
							</li>
						)
					})}	
			</ul>
		)
	}
})