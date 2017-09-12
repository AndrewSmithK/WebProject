import React, { Component } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import { ValidatorForm, TextValidator, SelectValidator } from 'react-material-ui-form-validator'

import './style.scss'

import arrowBottom from './icon-dropdown.svg'

const countryList = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Republic of Cyprus', 'Czech Republic',
    'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland', 'Italy', 'Latvia',
    'Liechtenstein', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Norway', 'Poland', 'Portugal',
    'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'United Kingdom', 'OTHER']

const selectFieldSettings = {
    className: 'text-field',
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
    },
    errorStyle: {
        backgroundColor: '#f4566a',
        color: '#f4566a',
        padding: '10px',
        fontSize: '12px',
        fontWeight: '500'
    }
}

const textFieldSettings = {
    className: 'text-field',
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
    },
    errorStyle: {
        backgroundColor: '#f4566a',
        color: '#f4566a',
        padding: '10px',
        fontSize: '12px',
        fontWeight: '500'
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
                email: '',
                function: '',
                lastName: '',
                firstName: '',
                number: '',
                registrationNumber: '',
                title: '',
                legalName: '',
                addressFirst: '',
                postCode: '',
                city: '',
                website: '',
                description: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const { formData } = this.state
        formData[event.target.name] = event.target.value
        this.setState({ formData })
    }

    handleSubmit() {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000)
        })
    }

    render() {
        const { formData } = this.state
        return (
            <div id="registration">
                <div className="head-block">
                    <div className="container text-center">
                        <h1 className="head-block__title">Commercial Registration Form</h1>
                    </div>
                </div>

                <div className="main-block">
                    <ValidatorForm ref="form" onSubmit={this.handleSubmit} >
                        <div className="form">
                            <h2 className="form__title">The Company</h2>
                            <div className="form__row">
                                <div className="form__field">
                                    <SelectValidator
                                        {...selectFieldSettings}
                                        name="country"
                                        value={0}
                                        floatingLabelText="Country"
                                        validators={['required']}
                                        errorMessages={['You forgot to give us the country.']}
                                    >
                                        {countryList.map((country, index) => <MenuItem key={index} value={index} primaryText={country} />)}
                                    </SelectValidator>
                                </div>

                                <div className="form__field">
                                    <TextValidator
                                        {...textFieldSettings}
                                        value={formData.registrationNumber}
                                        onChange={this.handleChange}
                                        floatingLabelText="Company registration number"
                                        name="registrationNumber"
                                        validators={['required']}
                                        errorMessages={['You forgot to give us the company registration number.']}
                                    />
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__field">
                                    <TextValidator
                                        {...textFieldSettings}
                                        value={formData.legalName}
                                        onChange={this.handleChange}
                                        floatingLabelText="Legal Name"
                                        name="legalName"
                                        validators={['required']}
                                        errorMessages={['This field is required.']}
                                    />
                                </div>

                                <div className="form__field">
                                    <TextField {...textFieldSettings} floatingLabelText="Commercial Name (optional)" />
                                </div>
                            </div>

                            <TextValidator
                                {...textFieldSettings}
                                value={formData.addressFirst}
                                onChange={this.handleChange}
                                floatingLabelText="Address Line 1"
                                name="addressFirst"
                                validators={['required']}
                                errorMessages={['This field is required.']}
                            />

                            <TextField {...textFieldSettings} floatingLabelText="Address Line 2" />

                            <div className="form__row form__row--post">
                                <div className="form__field form__field--post">
                                    <TextValidator
                                        {...textFieldSettings}
                                        value={formData.postCode}
                                        onChange={this.handleChange}
                                        floatingLabelText="Post Code"
                                        name="postCode"
                                        validators={['required']}
                                        errorMessages={['This field is required.']}
                                    />
                                </div>

                                <div className="form__field form__field--code">
                                    <TextValidator
                                        {...textFieldSettings}
                                        value={formData.city}
                                        onChange={this.handleChange}
                                        floatingLabelText="City"
                                        name="city"
                                        validators={['required']}
                                        errorMessages={['This field is required.']}
                                    />
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
                                <TextValidator
                                    {...textFieldSettings}
                                    value={formData.website}
                                    onChange={this.handleChange}
                                    floatingLabelText="Website"
                                    name="website"
                                    validators={['required']}
                                    errorMessages={['This field is required.']}
                                />
                            </div>

                            <TextValidator
                                {...textFieldSettings}
                                value={formData.description}
                                onChange={this.handleChange}
                                multiLine
                                rows={3}
                                floatingLabelText="Short description of your business"
                                name="description"
                                validators={['required', 'maxNumber:250']}
                                errorMessages={['This field is required.', 'max 250 characters']}
                            />

                        </div>

                        <div className="form">
                            <h2 className="form__title">The Contact Person</h2>

                            <div className="form__field">
                                <SelectValidator
                                    {...selectFieldSettings}
                                    name="country"
                                    value={0}
                                    floatingLabelText="Title"
                                    validators={['required']}
                                    errorMessages={['This field is required.']}
                                >
                                    <MenuItem value={0} primaryText="Mr" />
                                    <MenuItem value={1} primaryText="Mme" />
                                </SelectValidator>
                            </div>

                            <div className="form__row">
                                <div className="form__field">
                                    <TextValidator
                                        {...textFieldSettings}
                                        value={formData.firstName}
                                        onChange={this.handleChange}
                                        floatingLabelText="First Name"
                                        name="firstName"
                                        validators={['required']}
                                        errorMessages={['You forgot to give us the first name of the contact.']}
                                    />
                                </div>

                                <div className="form__field">
                                    <TextValidator
                                        {...textFieldSettings}
                                        value={formData.lastName}
                                        onChange={this.handleChange}
                                        floatingLabelText="Last Name"
                                        name="lastName"
                                        validators={['required']}
                                        errorMessages={['You forgot to give us the last name of the contact.']}
                                    />
                                </div>
                            </div>

                            <div className="form__field">
                                <TextValidator
                                    {...textFieldSettings}
                                    value={formData.function}
                                    onChange={this.handleChange}
                                    floatingLabelText="Function"
                                    name="function"
                                    validators={['required']}
                                    errorMessages={['Please specify the function of the contact person.']}
                                />
                            </div>

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
                                    <TextValidator
                                        {...textFieldSettings}
                                        value={formData.number}
                                        onChange={this.handleChange}
                                        floatingLabelStyle={{ display: 'none' }}
                                        floatingLabelText="Number"
                                        name="number"
                                        validators={['required', 'matchRegexp:^[0-9]$']}
                                        errorMessages={['this field is required', 'The format of the phone number is not correct. Please respect the format « 499 12 34 56 ».']}
                                    />
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
