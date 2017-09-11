import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import './style.scss'

import arrowBottom from './icon-dropdown.svg'

const selectFieldSettings = {
    fullWidth: true,
    dropDownMenuProps: {
        iconButton: <img src={arrowBottom} alt="arrowBottom" />
    },
    iconStyle: {
        paddingRight: 0,
        width: 'auto'
    },
    underlineStyle: {
        borderBottomWidth: '2px',
        borderBottomColor: '#317bda',
        bottom: '5px'
    },
    labelStyle: {
        color: '#317bda',
        fontSize: '18px',
        paddingBottom: '15px'
    },
    floatingLabelStyle: {
        fontSize: '10px',
        color: '#5b7289'
    }
}

const textFieldSettings = {
    fullWidth: true,
    underlineStyle: {
        borderBottomWidth: '2px',
        borderBottomColor: '#317bda',
        bottom: '5px'
    },
    floatingLabelFocusStyle: {
        fontSize: '10px',
        opacity: 1
    },
    floatingLabelShrinkStyle: {
        fontSize: '10px',
        opacity: 1
    },
    floatingLabelStyle: {
        fontSize: '18px',
        color: '#5b7289',
        opacity: 0.5
    },
    inputStyle: {
        color: '#317bda',
        fontSize: '18px'
    }
}

const radioButtonSettings = {
    style: {
        width: 'auto',
        marginRight: '30px',
        float: 'left'
    },
    iconStyle: {
        marginRight: '10px'
    }
}

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                email: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { formData } = this.state
        formData[event.target.name] = event.target.value
        this.setState({ formData })
    }

    render() {
        const { formData, submitted } = this.state
        return (
            <div id="registration">
                <div className="head-block">
                    <div className="container text-center">
                        <h1 className="head-block__title">Commercial Registration Form</h1>
                    </div>
                </div>

                <div className="main-block">
                    <ValidatorForm ref="form" >
                        <div className="form">
                            <h2 className="form__title">The Company</h2>
                            <div className="form__row">
                                <div className="form__field">
                                    <SelectField {...selectFieldSettings} value={1} floatingLabelText="Country" >
                                        <MenuItem value={1} primaryText="Belgium" />
                                        <MenuItem value={2} primaryText="Germany" />
                                        <MenuItem value={3} primaryText="France" />
                                    </SelectField>
                                </div>

                                <div className="form__field">
                                    <TextField {...textFieldSettings} floatingLabelText="Company registration number" />
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__field">
                                    <TextField {...textFieldSettings} floatingLabelText="Legal Name" />
                                </div>

                                <div className="form__field">
                                    <TextField {...textFieldSettings} floatingLabelText="Commercial Name (optional)" />
                                </div>
                            </div>

                            <TextField {...textFieldSettings} floatingLabelText="Address Line 1" />

                            <TextField {...textFieldSettings} floatingLabelText="Address Line 2" />

                            <div className="form__row form__row--post">
                                <div className="form__field form__field--post">
                                    <TextField {...textFieldSettings} floatingLabelText="Post Code" />
                                </div>

                                <div className="form__field form__field--code">
                                    <TextField {...textFieldSettings} floatingLabelText="City" />
                                </div>
                            </div>

                            <div className="radio-group">
                                <div className="radio-group__title">Insurance intermediary</div>
                                <RadioButtonGroup defaultSelected="1" name="insurance" className="radio-group__buttons">
                                    <RadioButton value="1" label="Yes" {...radioButtonSettings} />
                                    <RadioButton value="0" label="No" {...radioButtonSettings} />
                                </RadioButtonGroup>
                            </div>

                            <div className="form__field">
                                <TextField {...textFieldSettings} floatingLabelText="Insurance License Number" />
                            </div>

                            <div className="form__field">
                                <TextField {...textFieldSettings} floatingLabelText="Website" />
                            </div>

                            <TextField {...textFieldSettings} multiLine rows={3} floatingLabelText="Short description of your business" />

                        </div>

                        <div className="form">
                            <h2 className="form__title">The Contact Person</h2>

                            <div className="form__field">
                                <SelectField {...selectFieldSettings} value={1} floatingLabelText="Title" >
                                    <MenuItem value={1} primaryText="Miss" />
                                </SelectField>
                            </div>

                            <div className="form__row">
                                <div className="form__field">
                                    <TextField {...textFieldSettings} floatingLabelText="First Name" />
                                </div>

                                <div className="form__field">
                                    <TextField {...textFieldSettings} floatingLabelText="Last Name" />
                                </div>
                            </div>

                            <div className="form__field">
                                <TextField {...textFieldSettings} floatingLabelText="Function" />
                            </div>

                            {/* <TextField {...textFieldSettings} floatingLabelText="Email" /> */}
                            <TextValidator
                                {...textFieldSettings}
                                value={formData.email}
                                onChange={this.handleChange}
                                floatingLabelText="Email"
                                name="email"
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />

                            <div className="form__row form__row--phone">
                                <div className="form__field form__field">
                                    <SelectField {...selectFieldSettings} value={1} floatingLabelText="Phone Number" >
                                        <MenuItem value={1} primaryText="+32" />
                                    </SelectField>
                                </div>

                                <div className="form__field form__field">
                                    <TextField {...textFieldSettings} floatingLabelStyle={{ display: 'none' }} floatingLabelText="Number" />
                                </div>
                            </div>

                            <button className="btn" type="submit">Continue</button>
                        </div>
                    </ValidatorForm>
                </div>
            </div>
        )
    }
}
