import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'
import LabelItem from './label-item'

export default React.createClass({
	mixins: [ampersandMixin],

	render() {
		const {labels} = this.props

		return (
			<div>
					{labels.map((label) => {
						return (
							<LabelItem label={label} key={label.name} />
						)
					})}	
			</div>
		)
	}
})