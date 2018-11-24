import React, { Fragment } from 'react'
import { JssProvider } from 'react-jss'
import { create as createJss } from 'jss'
import jssPreset from 'jss-preset-default'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createGenerateClassName } from '@material-ui/core/styles'

const jss = createJss(jssPreset())
const generateClassName = createGenerateClassName()

/**
 * High Order Component that provides Jss with Theme to Components
 *
 * @returns {function(*): *}
 */
export const withJssThemeProvider = () => WrappedComponent => props => (
  <JssProvider
    jss={ jss }
    generateClassName={ generateClassName }
  >
    <Fragment>
      <CssBaseline />
      <WrappedComponent { ...props } />
    </Fragment>
  </JssProvider>
)
