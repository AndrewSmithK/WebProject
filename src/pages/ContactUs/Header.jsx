import React from 'react';

export default class Header extends React.Component {
  render() {
    return (<section className="section" id="header-contact-us">
      <div className="container">
        <div className="row justify-content-center text-center">
          <h1 className="title text-white">
					Contact us
				</h1>
          <h4 className="subtitle text-white">
            Got a question? We’d love to hear from you.<br />
            Drop us a message, we’ll get in touch as soon as possible.
					</h4>
        </div>
      </div>
    </section>);
  }
}
