import React from 'react'

export default React.createClass({
	displayName: 'ContactForm',

	baymaxQuotes: [
		'Baymax: On a scale of 1 to 10, how would you rate your pain?', 
		'Baymax: *Fist Bump - Ba la la la la.', 
		'Baymax: Hello, I am Baymax, your personal healthcare companion.', 
		'Baymax: We jumped out a window!', 
		'Baymax: Those that suffer a loss require support from friends and loved ones.', 
		'Baymax: You have sustained no injuries. However, your hormone and neurotransmitter levels indicate that you are experiencing mood swings, common in adolescence. Diagnosis: puberty.'
	],

	randomBaymaxQuote () {
		var randomIndex = (Math.floor(Math.random() * (this.baymaxQuotes.length -1)));
		
		return this.baymaxQuotes[randomIndex];
	},

	render() {
		return (
			<div className='contact-form'>
				<form>
					<div className='form-input'>
						<label>Name</label>
						<input type='text' placeholder='Hiro Hamada' />
					</div>

					<div className='form-input'>
						<label>Email</label>
						<input type='email' placeholder='bigherosix@disney.com' />
					</div>

					<div className='form-input'>
						<label>Message</label>
						<textarea rows="10" cols="42" placeholder={this.randomBaymaxQuote()}></textarea>
					</div>

					<div className='form-input'>
						<button type='submit'>Send</button>
					</div>
				</form>
			</div>
		)
	}
})