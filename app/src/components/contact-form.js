import React from 'react'

export default React.createClass({
	displayName: 'ContactForm',

	getInitialState () {
    return {
    	contactName: '',
    	contactEmail: '',
    	contactMessage: '',
    	baymaxQuote: this.randomBaymaxQuote(),
    	errorMessage: ''
    };
  },

  handleNameChange (event) {
    this.setState({contactName: event.target.value});
  },

  handleEmailChange (event) {
    this.setState({contactEmail: event.target.value});
  },

  handleMessageChange (event) {
    this.setState({contactMessage: event.target.value});
  },

  contactFormSubmission (event) {
		event.preventDefault()

		var data = 'contactName=' + this.state.contactName + "&contactEmail=" + this.state.contactEmail + "&contactMessage=" + this.state.contactMessage;

		this.sendEmail(data);
	},

	sendEmail (data) {
		var xmlhttp;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if(xmlhttp.status == 200){
           			debugger
               this.setState({errorMessage: ''});
           }
           else {
               this.setState({errorMessage: ("Issue sending message. Please try again.")});
           }
        }
    }

    xmlhttp.open("POST", "/contact", true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(data);
	},

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
		var contactName = this.state.contactName;
		var contactEmail = this.state.contactEmail;
		var contactMessage = this.state.contactMessage;
		var baymaxQuote = this.state.baymaxQuote;
		var errorMessage = this.state.errorMessage;

		return (
			<div className='contact-form'>
				<form onSubmit={this.contactFormSubmission}>
					<div className='form-input'>
						<label>Name</label>
						<input type='text' value={contactName} onChange={this.handleNameChange} maxLength="20" placeholder='Tae Kim' />
					</div>

					<div className='form-input'>
						<label>Email</label>
						<input type='email' value={contactEmail} onChange={this.handleEmailChange} maxLength="40" placeholder='taekimjr@gmail.com' />
					</div>

					<div className='form-input'>
						<label>Message</label>
						<textarea value={contactMessage} onChange={this.handleMessageChange} rows="10" cols="42" placeholder={baymaxQuote}></textarea>
					</div>

					<div className='form-input'>
						<button type='submit'>Send</button>
						<p className='error-message'>{errorMessage}</p>
					</div>
				</form>
			</div>
		)
	}
})