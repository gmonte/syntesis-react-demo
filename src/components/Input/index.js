import React, { Component, Fragment } from 'react'
import TextField from '@material-ui/core/TextField'

class Input extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange({ target: { value }}) {
    const {
      name,
      onChangeInput
    } = this.props

    onChangeInput(name, value)
  }

  render() {
    const {
      label,
      value
    } = this.props

    return (
      <TextField
        label={ label }
        value={ value }
        onChange={ this.onChange }
        margin="normal"
      />
    )
  }
}

export default Input
