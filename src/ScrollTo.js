import React from 'react';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const hasLocationChanged = this.props.location !== prevProps.location;
    const urlHasHash = window.location.hash !== '';

    if (hasLocationChanged && !urlHasHash) {
      // window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
