import React, { Component, Fragment } from 'react';
import flow from 'lodash/fp/flow'
import { withJssThemeProvider } from "../../theme"
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Input from '../Input'
import styles from './styles'

class Index extends Component {
  constructor(props) {
    super(props)

    this.onChangeInput = this.onChangeInput.bind(this)

    this.state = {
      title: ''
    }
  }

  onChangeInput(controlName, controlValue) {
    this.setState(prevState => ({
      ...prevState,
      [controlName]: controlValue
    }))
  }

  render() {
    const { classes } = this.props

    const {
      title
    } = this.state

    return (
      <Fragment>
        <Input
          name="title"
          label="Meu título"
          onChangeInput={ this.onChangeInput }
          value={ title }
        />

        <Button onClick={ () => console.warn(this.state) }>
          submit
        </Button>
      </Fragment>
    );
  }
}

export default flow(
  withJssThemeProvider(),
  withStyles(styles)
)(Index);
