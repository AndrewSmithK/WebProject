import React from 'react'
import { FormattedMessage } from 'react-intl-phraseapp'

export default (props) => {
    if (process.env.BROWSER) {
        return (
            <FormattedMessage
                id={props.id}
                defaultMessage={props.defaultMessage}
            />
        )
    } else {
        return (
            <div>
                !!!no phraseapp!!!
                {props.defaultMessage}
            </div>
        )
    }
}
