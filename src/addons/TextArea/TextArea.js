import { Ref } from '@fluentui/react-component-ref'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'

import { getElementType, getUnhandledProps } from '../../lib'

/**
 * A TextArea can be used to allow for extended user input.
 * @see Form
 */
class TextArea extends Component {
  ref = createRef()

  focus = () => this.ref.current.focus()

  handleChange = (e) => {
    const value = _.get(e, 'target.value')

    _.invoke(this.props, 'onChange', e, { ...this.props, value })
  }

  handleInput = (e) => {
    const value = _.get(e, 'target.value')

    _.invoke(this.props, 'onInput', e, { ...this.props, value })
  }

  render() {
    const { rows, value } = this.props
    const rest = getUnhandledProps(TextArea, this.props)
    const ElementType = getElementType(TextArea, this.props)

    return (
      <Ref innerRef={this.ref}>
        <ElementType
          {...rest}
          onChange={this.handleChange}
          onInput={this.handleInput}
          rows={rows}
          value={value}
        />
      </Ref>
    )
  }
}

TextArea.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /**
   * Called on change.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onChange: PropTypes.func,

  /**
   * Called on input.
   * @param {SyntheticEvent} event - The React SyntheticEvent object
   * @param {object} data - All props and the event value.
   */
  onInput: PropTypes.func,

  /** Indicates row count for a TextArea. */
  rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** The value of the textarea. */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

TextArea.defaultProps = {
  as: 'textarea',
  rows: 3,
}

export default TextArea
