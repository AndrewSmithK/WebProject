import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

export default class TermsDataPrivacy extends React.Component {
  render () {
    return <div className="text-container">
      <h5 className="title text-blue">
        <FormattedMessage 
          id={`terms.data.title`}
          defaultMessage={`Data Privacy`}
        />
      </h5>
      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.summary.title`}
            defaultMessage={`Summary`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.summary.p1`}
            defaultMessage={`Qover shall process as the controller Personal Data that it obtains in connection in accordance with its Privacy
            Policy and as summarized herein.`}
          />
        </p>
         <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.summary.p2`}
            defaultMessage={`The term “Personal Data” or “Personal Information” refers to personally identifiable information about an
            individual, such as their name, birthday, email address, health related data or mailing address. Qover may
            process Personal Data in order to arrange the insured’s insurance cover (including claims and renewals), to
            comply with a legal requirement, to administer account, to provide customer service, to perform checks and
            statistical analysis, to engage in fraud prevention and market our products and services.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.summary.p3`}
            defaultMessage={`In order to arrange the insured’s insurance cover, or process a claim, Qover may disclose personal data to other
            parties such as insurance partners, underwriters, claim adjusters who act for Qover for further processing. This
            may include personal data being disclosed to legal or regulatory bodies in order to comply with diverse legal
            regulations. Qover shall endeavor to ensure that any such data processed or disclosed is appropriately protected
            by technical and operational security measures and contractual measures where appropriate.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.summary.p4`}
            defaultMessage={`Qover shall also correct, amend or delete any inaccurate data and the insured may inform us of any such change
            by contacting Qover at the address stated in your Schedule. The insured has right to request the access to and
            rectification or erasure of his personal data. Qover shall only keep Personal Data for as long as reasonably
            necessary for the purposes for which it was collected or to comply with any legal, ethical or document retention
            requirements.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.summary.p5`}
            defaultMessage={`Questions about Qover’s data protection practices should be directed to us:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.summary.list.item1`}
              defaultMessage={`To unsubscribe or amend your Personal Data, contact: `}
            /> <a href="mailto:contact@qover.be">contact@qover.be</a>
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.summary.list.item2`}
              defaultMessage={`To request deletion, a copy of Personal Data, or for any other individual data subject queries, contact`}
            /> <a href="mailto:contact@qover.be">privacy@qover.be</a>
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.summary.list.item3`}
              defaultMessage={`You are always entitled to lodge a complaint with the supervisory authority by contacting the Belgian
              Privacy Commission, by contacting`}
            /> <a href="mailto:contact@qover.be">commission@privacycommission.be</a>
          </li>
        </ul>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.policy.title`}
            defaultMessage={`Policy`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.policy.p1`}
            defaultMessage={`This page informs you of our policies regarding the collection, use and disclosure of Personal Information we
            receive from users of the site.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.policy.p2`}
            defaultMessage={`We are committed to ensuring the protection of all Personal Information that we hold and to fulfilling our
            responsibilities and obligations under data protection legislation, especially in compliance with the Belgian
            Privacy Act of 8 December 1992 on the protection of privacy in relation to the processing of personal data.
            By submitting Personal Information to us, you agree that we may process such information in accordance with this
            Privacy Policy.`}
          />
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.information.title`}
            defaultMessage={`Information we may collect`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.information.p1`}
            defaultMessage={`Questions about Qover’s data protection practices should be directed to us:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.information.list.item1`}
              defaultMessage={`information provided to us directly (e.g. to our claims handlers), whether by letter, email or otherwise;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.information.list.item2`}
              defaultMessage={`information from a third party (e.g. a broker, lawyer or medical expert) authorised to provide it to us;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.information.list.item3`}
              defaultMessage={`information received from a third party (e.g. a lawyer or external claims handler appointed by us in relation
                to a claim);`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.information.list.item4`}
              defaultMessage={`information provided in correspondence with us, or a record of it.`}
            />
          </li>
        </ul>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.communications.title`}
            defaultMessage={`Communications`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.communications.p`}
            defaultMessage={`We may use your Personal Information to contact you with newsletters, marketing or promotional materials and
            other information.`}
          />
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.security.title`}
            defaultMessage={`Security`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.security.p1`}
            defaultMessage={`The Personal Information that we collect from you is stored on highlight secured server of AWS (Amazon Web
              Service) Europe. The Personal Information that we collect from you may be transferred to, and stored at, a
              destination outside the European Economic Area (“EEA”). It may also be processed by staff operating outside the
              EEA who work for us, one of our associated companies or a third party engaged by us. By submitting Personal
              Information to us, you agree to this transfer, storing or processing. When doing so, we will take all steps
              reasonably necessary (i.e. Privacy Shield, Binding Corporate rules) to ensure that such Personal Information is
              treated securely at all times and in accordance with this Privacy Policy.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.security.p2`}
            defaultMessage={`The security of your Personal Information is important to us, but remember that no method of transmission over
            the Internet, or method of electronic storage, is 100% secure. While Qover strives to use commercially
            acceptable means to protect your Personal Information, we cannot guarantee its absolute security. Once we
            have received information from you, we will use strict procedures and security features to prevent unauthorized
            access.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.security.p3`}
            defaultMessage={`We limit access to Personal Information to those who we reasonably believe need to use that information in
            order to carry out their jobs.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.security.p4`}
            defaultMessage={`We have physical, electronic, and procedural safeguards that comply with our legal obligations to protect
            Personal Information.`}
          />
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.personal.title`}
            defaultMessage={`Use of Personal Information`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.personal.p1`}
            defaultMessage={`We use the Personal Information in the following ways:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.personal.list.item1`}
              defaultMessage={`Underwriting: for the purposes of underwriting by us, our associated companies or co-insurers`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.personal.list.item2`}
              defaultMessage={`Claims handling: for the purposes of claims handling by us and by our associated companies, co-insurers,
              the insured and its broker and other third parties advising us or otherwise relevant to the handling of a
              claim.`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.personal.list.item3`}
              defaultMessage={`Insurance administration:`}
            />
          </li>
          <li className="text text-grey ls-none">
            <p className="text text-grey">
              <span className="line"><b>-</b></span> <FormattedMessage 
                id={`terms.data.personal.list.item3.subitem1`}
                defaultMessage={`by us, (re)insurer(s) and (re)insurance broker(s) for any (re)insurance claim made by us, for renewal
                purposes, for our management reporting and for internal and external audit;`}
              />
            </p>
            <p className="text text-grey">
              <span className="line"><b>-</b></span> <FormattedMessage 
                id={`terms.data.personal.list.item3.subitem2`}
                defaultMessage={`to satisfy information requests; - to provide notifications about changes to our services; and`}
              />
            </p>
            <p className="text text-grey">
              <span className="line"><b>-</b></span> <FormattedMessage 
                id={`terms.data.personal.list.item3.subitem3`}
                defaultMessage={`with appropriate consents, to provide marketing services.`}
              />
            </p>
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.personal.list.item4`}
              defaultMessage={`Statistical analysis: for the purposes of statistical analysis and review of our business and business
              processes, quality assurance and reporting. This statistical analysis includes profiling which consists of
              any form of automated processing of personal data consisting of the use of personal data to evaluate
              certain personal aspects relating to a natural person, in particular to analyse or predict aspects
              concerning that natural person's performance at work, economic situation, health, personal preferences,
              interests, reliability, behaviour, location or movements.`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.personal.list.item5`}
              defaultMessage={`Fraud and crime prevention: in connection with compliance with law, regulation and any rules or codes.`}
            />
          </li>
        </ul>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.personal.p2`}
            defaultMessage={`Where you provide us with Personal Information that may be regarded as “sensitive personal data” you agree
            that we (and third parties acting on our behalf) may use such information for the above purposes of: (i)
            underwriting; (ii) claims handling; (iii) insurance administration; (iv) statistical analysis; and (v) fraud and crime
            prevention. “Sensitive personal data” includes information about a person’s racial or ethnic origin, political
            opinions, religious or similar beliefs, trade union membership, physical or mental health or condition or sexual
            life, or about the commission of, or proceedings for, any offence committed or alleged to have been committed
            by that person, the disposal of such proceedings or the sentence of any court in such proceedings.`}
          />
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.otherParties.title`}
            defaultMessage={`Information that you provide about other parties`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.otherParties.p1`}
            defaultMessage={`Where you submit Personal Information to us about other parties, we rely on you to have first obtained
            appropriate consents for the transfer, and processing of, such information, to or by us and third parties acting on
            our behalf, in accordance with this Privacy Policy.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.otherParties.p2`}
            defaultMessage={`By submitting such information to us you confirm that you have all necessary permissions and consents to do so.`}
          />
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.disclosure.title`}
            defaultMessage={`Disclosure of your Personal Information`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.disclosure.p1`}
            defaultMessage={`For the purposes set out above, we may share the information that you submit with the following third parties:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.disclosure.list1.item1`}
              defaultMessage={`any member of Qover`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.disclosure.list1.item2`}
              defaultMessage={`co-insurers, relevant insurance intermediaries and business introducers;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.disclosure.list1.item3`}
              defaultMessage={`third parties instructed and/or advising us for the purposes of claims handling, pricing analysis, fraud
              prevention or statistics;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.disclosure.list1.item4`}
              defaultMessage={`reinsurer(s) and reinsurance brokers;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.disclosure.list1.item5`}
              defaultMessage={`law enforcement or regulatory bodies in connection with compliance with any laws, regulation, rules or
              codes.`}
            />
          </li>
        </ul>
        <p className="text text-grey">
          We may also share your information in the following circumstances:
          <FormattedMessage 
            id={`terms.data.disclosure.p2`}
            defaultMessage={`law enforcement or regulatory bodies in connection with compliance with any laws, regulation, rules or
            codes.`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.disclosure.list2.item1`}
              defaultMessage={`if we, or substantially all of our assets or a part of our business, are or may be acquired by a third party, in
              which case Personal Information held by us about our customers may be one of the transferred assets;
              and`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.data.disclosure.list2.item1`}
              defaultMessage={`to protect the rights, property, or safety of us, our customers, or others (e.g. exchanging information with
                other companies and organizations for the purposes of fraud protection and credit risk reduction).`}
            />
          </li>
        </ul>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.access.title`}
            defaultMessage={`Access to information`}
          />
        </h6>
        <p className="text text-grey">
          Data subjects have the right to access information held about them. This right of access can be exercised in
          accordance with Belgian and EU data protection laws.
          <FormattedMessage 
            id={`terms.data.access.p1`}
            defaultMessage={`Access to information`}
          />
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.data.changes.title`}
            defaultMessage={`Changes to This Privacy Policy`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.changes.p1`}
            defaultMessage={`This Privacy Policy is effective as of 18/01/2017 and will remain in effect except with respect to any changes in
            its provisions in the future, which will be in effect immediately after being posted on this page.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.data.changes.p2`}
            defaultMessage={`We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy
            periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page
            will constitute your acknowledgment of the modifications and your consent to abide and be bound by the
            modified Privacy Policy`}
          />
        </p>
      </div>

    </div>;
  }
}
