import React from 'react'

export default React.createClass({
	render() {
		const {title, body} = this.props

		return (
			<div>
					<span className='title'>{title}</span>
					<span className='body'> {body}</span>
			</div>
		)
	}
})