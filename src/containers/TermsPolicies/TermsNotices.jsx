import React from 'react';
import FormattedMessage from '../../components/phrase';

export default class TermsNotices extends React.Component {
  render () {
    return <div className="text-container">
      <h5 className="title text-blue">
        <FormattedMessage 
          id={`terms.legal.title`}
          defaultMessage={`Legal notices`}
        />
      </h5>
      <div className="item">
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p1`}
            defaultMessage={`Qover SA/NV (in short Qover), with registered office at rue Eugène Toussaint 54, box 1 – 1090 Brussels, RPR
            0650.939.878, is registered as insurance agent nr. 115284A at the register of insurance intermediaries held by
            the Financial Services Market Authority.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p2`}
            defaultMessage={`The Financial Services Market Authority (in short: FSMA) is responsible for supervising the financial markets and
            listed companies, authorising and supervising certain categories of financial institutions, overseeing compliance
            by financial intermediaries with codes of conduct and supervising the marketing of investment products to the
            general public, as well as for the ‘social supervision’ of supplementary pensions. The FSMA has its registered
            office at 1000 Brussel, Congresstraat 12-14.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p3`}
            defaultMessage={`The register of insurance intermediaries of the FSMA can be consulted online at www.fsma.be.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p4`}
            defaultMessage={`All pre-contractual relations with our consumers are based upon the Belgian Insurance Law of 4 April 2014 and
            the Code of Economic Law. Qover will hold a copy of your insurance contract for archiving purposes. You’re
            always entitled to access this information upon request to contract@qover.be.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p5`}
            defaultMessage={`The information and other data published and made accessible through this site are purely informative. For this
            reason, Qover will in no way be held responsible for any periods of unavailability of service or for any typos and
            inconsistencies in the structure of the content. All content included on this website is intended for information
            only.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p6`}
            defaultMessage={`The general terms & conditions of the insurance products offered by Qover can be consulted online at the
            product configuration page of each product.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p7`}
            defaultMessage={`Qover has a policy on conflicts of interest and a remuneration policy, which can be consulted online on our
            Conflict of Interest page.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.legal.p8`}
            defaultMessage={`You can communicate with us in Dutch, French or English, by the following means:`}
          /><br/>
          •&nbsp; <FormattedMessage 
            id={`terms.legal.list.item1`}
            defaultMessage={`in writing: our address is rue des Palais 44 – 1030 Brussels`}
          /><br/>
          •&nbsp; <FormattedMessage 
            id={`terms.legal.list.item2`}
            defaultMessage={`by phone: our general phone number is +32 2 588 25 50`}
          /><br/>
          •&nbsp; <FormattedMessage 
            id={`terms.legal.list.item3`}
            defaultMessage={`by e-mail: our general e-mail address is contact@qover.be`}
          /><br/>
          •&nbsp; <FormattedMessage 
            id={`terms.legal.list.item4`}
            defaultMessage={`via the contact form on our website`}
          />
        </p>
      </div>
    </div>;
  }
}
