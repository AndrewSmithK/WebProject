import React from 'react';

export default class TermsNotices extends React.Component {
  render () {
    return <div className="text-container">
      <h5 className="title text-blue">
        Complaints
      </h5>
      <h6 className="subtitle text-blue">
        We are sorry to hear that. Please let us know so that we can improve our service. <br/>
        You can also contact one of the following instances:
      </h6>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          Qover
        </h6>
        <p className="text text-grey">
          <b>
            You should, in the first instance, write to
          </b>
        </p>
        <p className="text text-grey">
          <b>
            QOVER SA/NV’s Mediation Department,
          </b><br/>
          Rue Eugène Toussaint, 54 - bte 1  <br/>
          1090 Brussels - Belgium
        </p>
        <p className="text text-grey">
          E-mail: <a href="mailto:mediation@qover.me">mediation@qover.me</a> <br/>
          Tel: <a href="tel:+32.2.588.25.50">+32.2.588.25.50</a>
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          Ombudsman
        </h6>
        <p className="text text-grey">
          <b>
            If the matter still has not been resolved to Your satisfaction, You may contact:
          </b>
        </p>
        <p className="text text-grey">
          <b>
            The Insurance Ombudsman,
          </b><br/>
          Square de Meeûs, 35 <br/>
          1000 Brussels - Belgium
        </p>
        <p className="text text-grey">
          E-mail: <a href="mailto:info@ombudsman.as ">info@ombudsman.as </a> <br/>
          Tel: <a href="tel:+32.2.547.58.71">+32.2.547.58.71</a>
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          The European Online Dispute Resolution Platform
        </h6>
        <p className="text text-grey">
          If you arranged your policy with US online or through other electonic means (e.g. phone, SMS, fax or mobile
          device), and have been unable to contact us either directly or through the Financial Ombudsman Service, you
          may wish to register your complaint through the European Online Dispute Platform - http://ec.europa.eu/odr
        </p>
        <p className="text text-grey">
          Your complaint will then be redirected to the Financial Ombudsman Service and to US to resolve. There may be a
          short delay before we receive it. Any telephone calls made in connection with this Policy may be monitored or
          recorded to assist with staff training and for quality purposes.
        </p>
      </div>
    </div>;
  }
}
