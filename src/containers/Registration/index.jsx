import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

import './style.scss'

import arrowBottom from './icon-dropdown.svg'

const selectFieldSettings = {
    fullWidth: true,
    floatingLabelText: "Frequency",
    dropDownMenuProps: {
        iconButton: <img src={arrowBottom} alt="arrowBottom"/>
    },
    iconStyle: {
        paddingRight: 0,
        width: 'auto'
    },
    underlineStyle: {
        borderBottomWidth: '2px',
        borderBottomColor: '#317bda'
    },
    labelStyle: {
        color: '#317bda',
        fontSize: '18px'
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
        borderBottomColor: '#317bda'
    },
    floatingLabelFocusStyle: {
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
            </div>

            <div className="form">
                <h2 className="form__title">The Contact Person</h2>
                test
            </div>
        </div>
    </div>
)