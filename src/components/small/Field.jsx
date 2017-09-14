import React from 'react';
import TextField from 'material-ui/TextField';

export default class Field extends React.Component {
  render() {
    const { hintText, 
            floatingLabelText, 
            width,
            multiLine,
            rows,
            rowsMax,
            type } = this.props;

    return (<div className={`field ${width}`}>
      <TextField
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
          color: '#317bda',
        }}
        textareaStyle={{
          paddingBottom: '7px',
          fontSize: '18px',
          color: '#317bda',
        }}
        floatingLabelStyle={{
          top: '30px',
          fontSize: '14.667px',
          color: '#5b7289',
          fontFamily: 'Roboto',
        }}
        hintStyle={{
          fontSize: '18px',
          color: '#317bda',
          bottom: '18px',
        }}
        underlineStyle={{
          borderBottomWidth: '2px',
          borderBottomColor: '#317bda',
        }}
      />
    </div>);
  }
}
