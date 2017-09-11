import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

import './style.scss'

import arrowBottom from './icon-dropdown.svg'

const selectFieldSettings = {
    fullWidth: true,
    floatingLabelText: "Frequency",
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
    hintText: "Hint Text",
    floatingLabelText: "Fixed Floating Label Text",
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

export default () => (
    <div id="registration">
        <div className="head-block">
            <div className="container text-center">
                <h1 className="head-block__title">Commercial Registration Form</h1>
            </div>
        </div>

        <div className="main-block">
            <div className="form">
                <h2 className="form__title">The Company</h2>
                <div className="form__row">
                    <div className="form__field">
                        <SelectField {...selectFieldSettings} value={1}>
                            <MenuItem value={1} primaryText="Neverg" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </SelectField>
                    </div>

                    <div className="form__field">
                        <TextField {...textFieldSettings} />
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
                    <TextField {...textFieldSettings} />
                </div>

                <div className="form__row form__row--post">
                    <div className="form__field form__field--post">
                        <TextField {...textFieldSettings} floatingLabelText="Post Code" />
                    </div>

                    <div className="form__field form__field--code">
                        <TextField {...textFieldSettings} floatingLabelText="City" />
                    </div>
                </div>

            </div>

            <div className="form">
                <h2 className="form__title">The Contact Person</h2>
                test
            </div>
        </div>
    </div>
)
