import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';

import img from "../../images/inducements.svg";

export default class TermsConflicts extends React.Component {
  render () {
    return <div className="text-container">
      <h5 className="title text-blue" id="conflicts">
        <FormattedMessage
          id={`terms.conflicts.title`}
          defaultMessage={`Conflicts of Interest & Inducement Policy`}
        />
      </h5>
      <h6 className="subtitle text-blue" id="main-subtitle">
        <FormattedMessage
          id={`terms.conflicts.desc`}
          defaultMessage={`Information on Qover's policy on conflicts of interest and inducements`}
        />
      </h6>
      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage
            id={`terms.conflicts.block1.title`}
            defaultMessage={`1. Information on the policy on conflicts of interest`}
          />
        </h6>
        <p className="text text-grey">
          <b>
            <FormattedMessage
              id={`terms.conflicts.block1.part1.title`}
              defaultMessage={`1.1. General principles`}
            />
          </b>
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part1.p`}
            defaultMessage={`For the conduct of its business, Qover has adopted the principle of managing in an honest, equitable and
            professional manner any conflicts of interest which may arise between Qover and its clients, a client and another
            party who act for Qover or among its clients. In accordance with the applicable law, Qover takes all necessary
            measures to identify and properly manage conflicts of interest which give rise to a significant risk of damage
            likely to harm the interests of its clients whether current, potential and former clients (hereinafter the "Client").`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part1.list.title`}
            defaultMessage={`Conflicts of interest may arise between:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part1.list1.item1`}
              defaultMessage={`Qover and a Client;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part1.list1.item2`}
              defaultMessage={`a concerned person and Qover and/or a Client of Qover;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part1.list1.item3`}
              defaultMessage={`several Qover clients in connection with the provision of services offered by Qover to these Clients;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part1.list1.item4`}
              defaultMessage={`an intermediary/supplier of Qover and a Client.`}
            />
          </li>
        </ul>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part1.list2.title`}
            defaultMessage={`For the purposes of this policy on conflicts of interests, the term concerned person refers to:`}
          />
        </p>

        <ul>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part1.list2.item1`}
              defaultMessage={`an employee or manager of Qover or a representative appointed by Qover as well as any natural person
              whose services are made available to and are provided under the control of Qover and who is involved
              in Qover's regulated activities;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part1.list2.item2`}
              defaultMessage={`an intermediary, partner or equivalent;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part1.list2.item3`}
              defaultMessage={`a natural person involved in the provision of Qover services or his representative appointed under a sub-
              contract for the provision of insurance services and activities.`}
            />
          </li>
        </ul>
        <p className="text text-grey">
          <b>
            <FormattedMessage
              id={`terms.conflicts.block1.part2.title`}
              defaultMessage={`1.2. Internal measures for the identification and management of conflicts of interests`}
            />
          </b>
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.list1.title`}
            defaultMessage={`In order to identify these conflicts of interest, Qover focuses on facts and also does its best to determine, in
            particular, if a concerned person, or any other person:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list1.item1`}
              defaultMessage={`is likely to derive a financial gain or prevent a financial loss at the expense of the Client;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list1.item2`}
              defaultMessage={`has an interest in the outcome of a service provided to the Client or of a transaction carried out on behalf
              of that Client, which is distinct from the Client's interest in that outcome;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list1.item3`}
              defaultMessage={`has a financial or other incentive to favour the interest of Qover and/or a Client or group of Clients over
              the interests of Qover and/or another Client or an intermediary.`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list1.item4`}
              defaultMessage={`has the same professional activity as the Client; and/or`}
            />
          </li>
          <li className="text text-grey">

            <FormattedMessage
              id={`terms.conflicts.block1.part2.list1.item5`}
              defaultMessage={`receives or shall receive from a person other than the Client an inducement in relation to the service
              provided to the Client, in the form of monies, goods or services, other than the standard commission or
              fee for that service.`}
            />
          </li>
        </ul>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.p1`}
            defaultMessage={`When a conflict of interest is identified, it must be managed rapidly, equitably and adequately.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.list2.title`}
            defaultMessage={`Examples of basic measures laid out in the rules adopted by Qover are:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list2.item1`}
              defaultMessage={`effective procedures to control the flow of information in situations involving the risk of a conflict of
              interest likely to damage the interests of a Client;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list2.item2`}
              defaultMessage={`appropriate controls to identify and manage multiple directorships and the concerned persons' interests
              outside the company;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list2.item3`}
              defaultMessage={`appropriate measures for the protection of information on Qover's services and activities when a conflict
              of interest is identified;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list2.item4`}
              defaultMessage={`where necessary, rules governing transactions by the personnel in their own name apply to the concerned
              persons;`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block1.part2.list2.item5`}
              defaultMessage={`a review of the adequacy of Qover's systems and controls is carried out on a regular basis.`}
            />
          </li>
        </ul>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.p2`}
            defaultMessage={`In the course of the management of a conflict of interest, it may be appropriate to have recourse to additional
            measures when the basic measures are not sufficient to adequately manage the potential conflict. These
            measures may include in particular the setting up “Chinese walls" on an ad hoc basis, specific to the transactions
            or other additional measures for the separation of information.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.p3`}
            defaultMessage={`Qover employees must ensure that they adopt fully independent attitudes in their dealings with clients and
            insurance intermediaries. This is why measures aimed at preventing any influence and guaranteeing an
            independent attitude have been introduced: separation of departments, prevention of improper intervention in
            some activities or services, policy on gifts and invitations.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.p4`}
            defaultMessage={`When it can reasonably be expected that any measures taken to manage a conflict of interest will not be
            sufficient to protect the clients’ interests, the clients concerned shall be informed of the general nature and/or of
            the sources of the conflict of interest. Information must be communicated prior to the provision of the product or
            to the implementation of the service with which the risk of conflict of interest is associated.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.p5`}
            defaultMessage={`The procedure for notification of unmanageable conflicts of interest must remain the exception and is subject to
            approval by the Compliance Officer. The aforementioned step is not to substitute for the development of conflict
            of interest management measures as laid out and required above.`}
          />
        </p>
        <p className="text text-grey" id="qover-policy">
          <FormattedMessage
            id={`terms.conflicts.block1.part2.p6`}
            defaultMessage={`An additional support to the identification and management of conflicts of interest is provided through
            procedures and guidelines which have been set up in connection with other specific obligations.`}
          />
        </p>
      </div>

      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage
            id={`terms.conflicts.block2.title`}
            defaultMessage={`2. Information Qover's policy on inducements`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block2.p1`}
            defaultMessage={`Qover enters into cooperation agreements with business introducers. Such agreement governs the rights and
            obligations of the parties, including the remuneration payable by Qover to the introducer.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block2.p2`}
            defaultMessage={`It is important to note that Qover’s relationships with insurers work differently from traditional players. A
            traditional insurer builds and manages its products (and the premium integrates such internal costs on top of the
            risk carrying) and then remunerates brokers who merely distribute its products.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block2.p3`}
            defaultMessage={`As an InsurTech, it is important to highlight that Qover is not an additional intermediary in the traditional
            insurance value chain. Qover builds and manages insurance products as described below (and the role of the
            insurer is limited to risk carrying) and make it more cost-efficient. So in QOVER approach, the insurance premium
            is usually spread as follow:`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block2.list.item1`}
              defaultMessage={`45 to 65 %: for the INSURER (to pay the claims)`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block2.list.item2`}
              defaultMessage={`5 to 35 %: for QOVER to cover its own expenses (portfolio management, marketing, operations, IT, actuary, etc.)`}
            />
          </li>
          <li className="text text-grey">
            <FormattedMessage
              id={`terms.conflicts.block2.list.item3`}
              defaultMessage={`5 to 25 %: for the introducer`}
            />
          </li>
        </ul>
        <img src={img} alt='' className="hidden"/>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block2.p4`}
            defaultMessage={`Qover does not increase the cost of the insurance value chain but manages instead what the insurer traditionally
            do in a more efficient way ultimately aiming at a better user experience.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage
            id={`terms.conflicts.block2.p4`}
            defaultMessage={`Should you wish to have more information on these policies, the Client can contact the Compliance Officer by e-
            mail on the following address:`}
          /><a href="mailto:compliance@qover.be"> compliance@qover.be </a>
          <FormattedMessage
            id={`terms.conflicts.block2.p5`}
            defaultMessage={`or by mail: Qover - Compliance Department – rue des
            Palais 44 – 1030 Brussels - Belgium.`}
          />
        </p>
      </div>
    </div>;
  }
}
