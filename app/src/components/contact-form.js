import React from 'react'

export default React.createClass({
	displayName: 'ContactForm',

	render() {
		return (
			<div className='contact-form'>
				<form>
					<div className='form-input'>
						<label>Name</label>
						<input type='text' placeholder='John Smith' />
					</div>

					<div className='form-input'>
						<label>Email</label>
						<input type='email' placeholder='test@example.com' />
					</div>

					<div className='form-input'>
						<label>Message</label>
						<textarea rows="10" cols="42"></textarea>
					</div>

				</form>
			</div>
		)
	}
})