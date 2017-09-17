import React, { Component } from 'react'
import { TextValidator } from 'react-material-ui-form-validator'

import './Field.scss'

export default class Field extends Component {
  render() {
    const {
      hintText,
      floatingLabelText,
      width,
      multiLine,
      rows,
      rowsMax,
      type,
      name,
      validators,
      errorMessages,
      value,
      onChange,
      className } = this.props

    return (
      <div className={`field ${width}`}>
        <TextValidator
          className={className || 'text-field'}
          onChange={onChange}
          value={value}
          validators={validators}
          errorMessages={errorMessages}
          name={name}
          hintText={hintText || ''}
          floatingLabelText={floatingLabelText || ''}
          fullWidth
          floatingLabelFixed
          multiLine={multiLine || false}
          rows={rows || 1}
          rowsMax={rowsMax || 1}
          type={type || 'text'}
          inputStyle={{
            paddingBottom: '18px',
            fontSize: '18px',
            color: '#317bda'
          }}
          textareaStyle={{
            paddingBottom: '7px',
            fontSize: '18px',
            color: '#317bda'
          }}
          floatingLabelStyle={{
            top: '30px',
            fontSize: '14.667px',
            color: '#5b7289',
            fontFamily: 'Roboto'
          }}
          hintStyle={{
            fontSize: '18px',
            color: '#317bda',
            bottom: '18px'
          }}
          underlineStyle={{
            borderBottomWidth: '2px',
            borderBottomColor: '#317bda'
          }}
          errorStyle={{
            backgroundColor: '#f4566a',
            color: '#f4566a',
            padding: '10px',
            fontSize: '12px',
            fontWeight: '500'
          }}
        />
      </div>
    )
  }
}
