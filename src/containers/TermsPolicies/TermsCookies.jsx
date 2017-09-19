import React from 'react';
import FormattedMessage from '../../components/phrase';

export default class TermsCookies extends React.Component {
  render () {
    return <div className="text-container">
      <h5 className="title text-blue">
        <FormattedMessage 
          id={`terms.cookie.title`}
          defaultMessage={`Cookie policy`}
        />
      </h5>
      <p className="text text-grey">
        <b>
          <FormattedMessage 
            id={`terms.cookie.bold`}
            defaultMessage={`We may collect information on you while visiting our website such as cookies and log data.`}
          />
        </b>
      </p>
      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.cookie.logData.title`}
            defaultMessage={`Log data`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.logData.p1`}
            defaultMessage={`Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log
            Data").`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.logData.p2`}
            defaultMessage={`This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type,
            browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those
            pages and other statistics.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.logData.p3`}
            defaultMessage={`In addition, we may use third party services such as Google Analytics that collect, monitor and analyse this
            information.`}
          />
        </p>
      </div>
      <div className="item">
        <h6 className="subtitle text-turquoise">
          <FormattedMessage 
            id={`terms.cookie.cookies.title`}
            defaultMessage={`Cookies`}
          />
        </h6>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.cookies.p1`}
            defaultMessage={`Cookies are files with small amount of data, which may include an anonymous unique i dentifier. Cookies are sent
            to your browser from a web site and stored on your computer's hard drive.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.cookies.p2`}
            defaultMessage={`Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all or some
            cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some parts of our
            website might be slightly less user-friendly.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.cookies.p3`}
            defaultMessage={`There are different kinds of cookies with different functions:`}
          />
        </p>
          <p className="text text-grey ol-list">
            <span className="lowar-roman">(i)</span>
            <FormattedMessage 
              id={`terms.cookie.cookies.list1.item1`}
              defaultMessage={`Session cookies: these are only stored on your computer during your web session. They are automatically
              deleted when the browser is closed. They usually store an anonymous session ID allowing you to browse
              a website without having to log in to each page. They do not collect any information from your computer.`}
            />
          </p>
          <p className="text text-grey ol-list">
            <span className="lowar-roman">(ii)</span>
            <FormattedMessage 
              id={`terms.cookie.cookies.list1.item2`}
              defaultMessage={`Persistent cookies: a persistent cookie is one stored as a file on your computer, and it remains there when
              you close your web browser. The cookie can be read by the website that created it when you visit that
              website again.`}
            />
          </p>
          <p className="text text-grey ol-list">
            <span className="lowar-roman">(iii)</span>
            <FormattedMessage 
              id={`terms.cookie.cookies.list1.item3`}
              defaultMessage={`First-party cookies: the function of this type of cookie is to retain your preferences for a particular website
              for the entity that owns that website. They are stored and sent between our servers and your computer’s
              hard drive. They are not used for anything other than for personalization as set by you. These cookies may
              be either Session or Persistent cookies.`}
          />
          </p>
          <p className="text text-grey ol-list">
            <span className="lowar-roman">(iv)</span>
            <FormattedMessage 
              id={`terms.cookie.cookies.list1.item2`}
              defaultMessage={`Third-party cookies: the function of this type of cookie is to retain your interaction with a particular
              website for an entity that does not own that website. They are stored and sent between the Third-party’s
              server and your computer’s hard drive. These cookies are usually Persistent cookies.`}
            />
          </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.cookies.p4`}
            defaultMessage={`This Site does use Google Analytics, a web analytics service provided by Google, Inc. (“Google”). Google
            Analytics uses cookies to help the website analyse how users use the site. The information generated by the
            cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on
            servers in the United States. Google will use this information for the purpose of evaluating your use of the
            website, compiling reports on website activity, and providing other services relating to website activity and
            internet usage for Qover and its affiliates. Google may also transfer this information to third parties where
            required to do so by law, or where such third parties process the information on Google's behalf. Google will not
            associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting
            the appropriate settings on your browser, however please note that if you do this you may not be able to use the
            full functionality of this website. By using this website, you consent to the processing of data about you by
            Google in the manner and for the purposes set out above.`}
          />
        </p>
        <p className="text text-grey">
          <FormattedMessage 
            id={`terms.cookie.cookies.p5`}
            defaultMessage={`For information on all of these categories of cookies, and for more information generally on cookies please refer
            to aboutcookies.org.`}
          />
        </p>
        <ul>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.cookie.cookies.list2.item1`}
              defaultMessage={`Mozilla Firefox:`}
            />&nbsp;
            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
              https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
            </a>
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.cookie.cookies.list2.item2`}
              defaultMessage={`Google Chrome:`}
            />&nbsp;
            <a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en-GB">
              https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=en-GB
            </a>
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.cookie.cookies.list2.item2`}
              defaultMessage={`Safari:`}
            />&nbsp;
            <a href="https://support.apple.com/en-gb/HT201265">
              https://support.apple.com/en-gb/HT201265
            </a>
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.cookie.cookies.list2.item2`}
              defaultMessage={`Internet Explorer:`}
            />&nbsp;
            <a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">
              https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies
            </a>
          </li>
          <li className="text text-grey">
            <FormattedMessage 
              id={`terms.cookie.cookies.list2.item2`}
              defaultMessage={`If you do not wish to give information regarding your visits and activities on our website to Google
              Analytics, you can disable this option in your browser, through the following link:`}
            />&nbsp;
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en-GB–">
              https://tools.google.com/dlpage/gaoptout?hl=en-GB–
            </a>
          </li>
        </ul>
      </div>
    </div>;
  }
}
