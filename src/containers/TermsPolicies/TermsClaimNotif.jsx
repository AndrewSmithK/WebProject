import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

export default class TermsClaimNotif extends React.Component {
  render () {
    return <div className="text-container">
      <h5 className="title text-blue">
        <FormattedMessage 
          id={`terms.claim.title`}
          defaultMessage={`Claim notification`}
        />
      </h5>
      <div className="item">
        <h6 className="subtitle text-blue">
          <FormattedMessage 
            id={`terms.claim.subtitle`}
            defaultMessage={`Have a claim? Let us know as soon as possible.`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.claim.p1`}
            defaultMessage={`In case of loss, you must contact us as soon as possible by sending an email to claims@qover.be. You can also
            call us on +32.2.588.25.50 or send a postal mail to Qover - Claims Department - Rue des Palais 44 - 1030
            Brussels - Belgium. We will then guide you through the rest of the process.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.claim.p2`}
            defaultMessage={`For a swift and smooth process, we ask you to report any total loss within a 30-day period.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.claim.list1.title`}
            defaultMessage={`For each claim report, please provide us the following information:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list1.item1`}
              defaultMessage={`Your personal information (name, email, GAP contract number)`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list1.item2`}
              defaultMessage={`Your vehicle details (licence plate)`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list1.item3`}
              defaultMessage={`The claim notification statement`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list1.item4`}
              defaultMessage={`A copy of your Casco Policy Schedule`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list1.item4`}
              defaultMessage={`In the case of theft, report the incident to the police and provide us the crime reference number`}
            />
          </li>
        </ul>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.claim.list2.title`}
            defaultMessage={`Please note that you’ll also need to provide the following pieces at a later stage of the process:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list2.item1`}
              defaultMessage={`The settlement Proposal Letter of your Casco Insurer`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list2.item2`}
              defaultMessage={`The expertise report (if applicable)`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.claim.list2.item3`}
              defaultMessage={`The invoice or equivalent proof of purchase for your vehicle`}
            />
          </li>
        </ul>
      </div>
    </div>;
  }
}
