
import React from 'react';
import TermsHeader from '../../components/TermsHeader';
import TermsNotices from "./TermsNotices";
import './style.scss';

export default class Terms extends React.Component {
  render() {
    return <div>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <TermsNotices/>
          </div>
        </div>
      </div>
    </div>
  }
}
