import React from 'react';
import FormattedMessage from '../../components/phrase';

export default class TermsNotices extends React.Component {
  render () {
    return <div className="text-container">
      <h5 className="title text-blue">
        <FormattedMessage 
          id={`terms.complaints.title`}
          defaultMessage={`Complaints`}
        />
      </h5>
      <h6 className="subtitle text-blue">
        <FormattedMessage 
          id={`terms.complaints.subtitle`}
          defaultMessage={`We are sorry to hear that. Please let us know so that we can improve our service.
          You can also contact one of the following instances:`}
        />
      </h6>
      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.complaints.smalltitle1`}
            defaultMessage={`Qover`}
          />
        </h6>
        <p className="text text-grey">
          <b>
            <FormattedMessage 
              id={`terms.complaints.contact.item1.bold1`}
              defaultMessage={`You should, in the first instance, write to`}
            />
          </b>
        </p>
        <p className="text text-grey">
          <b>
            <FormattedMessage 
              id={`terms.complaints.contact.item1.bold2`}
              defaultMessage={`QOVER SA/NV’s Mediation Department,`}
            />
          </b><br/>
          <FormattedMessage 
            id={`terms.complaints.contact.item1.addres1`}
            defaultMessage={`Rue Eugène Toussaint, 54 - bte 1`}
          /><br/><FormattedMessage 
            id={`terms.complaints.contact.item1.addres2`}
            defaultMessage={`1090 Brussels - Belgium`}
          />
        </p>
        <p className="text text-grey">
          E-mail: <a href="mailto:mediation@qover.me">mediation@qover.me</a><br/>
          Tel: <a href="tel:+32.2.588.25.50">+32.2.588.25.50</a>
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.complaints.smalltitle2`}
            defaultMessage={`Ombudsman`}
          />
        </h6>
        <p className="text text-grey">
          <b>
            <FormattedMessage 
              id={`terms.complaints.contact.item2.bold1`}
              defaultMessage={`If the matter still has not been resolved to Your satisfaction, You may contact:`}
            />
          </b>
        </p>
        <p className="text text-grey">
          <b>
            <FormattedMessage 
              id={`terms.complaints.contact.item2.bold2`}
              defaultMessage={`The Insurance Ombudsman,`}
            />
          </b><br/>
          <FormattedMessage 
            id={`terms.complaints.contact.item2.addres1`}
            defaultMessage={`Square de Meeûs, 35,`}
          /><br/>
          <FormattedMessage 
            id={`terms.complaints.contact.item2.addres2`}
            defaultMessage={`1000 Brussels - Belgium,`}
          />
        </p>
        <p className="text text-grey">
          E-mail: <a href="mailto:info@ombudsman.as">info@ombudsman.as</a><br/>
          Tel: <a href="tel:+32.2.547.58.71">+32.2.547.58.71</a>
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.complaints.smalltitle3`}
            defaultMessage={`The European Online Dispute Resolution Platform`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.complaints.descript.p1`}
            defaultMessage={`If you arranged your policy with US online or through other electonic means (e.g. phone, SMS, fax or mobile
              device), and have been unable to contact us either directly or through the Financial Ombudsman Service, you
              may wish to register your complaint through the European Online Dispute Platform - http://ec.europa.eu/odr`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.complaints.descript.p1`}
            defaultMessage={`Your complaint will then be redirected to the Financial Ombudsman Service and to US to resolve. There may be a
            short delay before we receive it. Any telephone calls made in connection with this Policy may be monitored or
            recorded to assist with staff training and for quality purposes.`}
          />
        </p>
      </div>
    </div>;
  }
}
