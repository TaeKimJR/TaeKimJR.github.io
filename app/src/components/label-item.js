import React from 'react'
import ampersandMixin from 'ampersand-react-mixin'

export default React.createClass({
	mixins: [ampersandMixin],

	render() {
		const {label} = this.props
		const {color} = this.state
		const cssColor = '#' + color
		let content

		//editing
		if(label.editing) {
			content = (
				<form className='label' onSubmit={this.onSubmit}>
				  <span className='label-color avatar avatar-small avatar-rounded' style={{backgroundColor: cssColor}}>&nbsp;</span>
				  <input name='name' value={this.state.name} onChange={this.onNameChange} />
				  <input name='color' value={cssColor} onChange={this.onColorChange} />
				  <button type='submit' className='button button-small'>Save</button>
				  <button type='button' className='button button-small button-unstyled' onClick={this.onEditCancelClick}>cancel</button>
				</form>
			)
		}
		// display
		else{
			content = (
				<div className='label'>
				  <span className='label-color' style={{backgroundColor: cssColor}}>&nbsp;</span>
				  <span>{label.name}</span>
				  <span className='octicon octicon-pencil' onClick={this.onEditClick}></span>
				  <span className='octicon octicon-x' onClick={this.onDeleteCLick}></span>
				</div>
			)
		}

		return (
			<div>
				{content}
			</div>
		)
	},

	// part of the React class - set state of this class
	getInitialState () {
		const { name, color } = this.props.label

		return {
			name: name,
			color: color
		}
	},

	onEditClick (event) {
		event.preventDefault()
		this.props.label.editing = true
	},

	onEditCancelClick (event) {
		event.preventDefault()
		const {label} = this.props

		if(label.saved){
			this.props.label.editing = false
			this.setState(this.getInitialState())
		}
		else{
			label.destroy()
		}
	},

	onNameChange (event) {
		const nameInputValue = event.target.value;
		this.setState({
			name: nameInputValue
		})
	},

	onColorChange (event) {
		const colorInputValue = event.target.value.slice(1);
		this.setState({
			color: colorInputValue
		})
	},

	onDeleteCLick (event) {
		event.preventDefault()
		this.props.label.destroy({wait: true})
	},

	onSubmit (event) {
		event.preventDefault()
		const {label} = this.props

		if(label.saved){
			label.update(this.state)
		}	
		else{
			label.save(this.state, {
				success: function() {
					label.saved = true
				}
			})
		}

		label.editing = false
	}
})