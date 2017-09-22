import React from 'react';
import { FormattedMessage } from 'react-intl-phraseapp';
import { Link } from 'react-router-dom'

import Quentin from '../../images/About/Who-we-are/quentin.png';
import JeanCharles from '../../images/About/Who-we-are/jean-charles.png';
import Eleonore from '../../images/About/Who-we-are/eleonore.png';
import Geert from '../../images/About/Who-we-are/geert.png';
import Denis from '../../images/About/Who-we-are/denis.png';
import Ali from '../../images/About/Who-we-are/ali.png';
import Romuald from '../../images/About/Who-we-are/romuald.png';
import Juan from '../../images/About/Who-we-are/juan.png';
import Amandine from '../../images/About/Who-we-are/amandine.png';
import Dominique from '../../images/About/Who-we-are/dominique.png';
import Hamza from '../../images/About/Who-we-are/hamza.png';
import Emilien from '../../images/About/Who-we-are/emilien.png';
import Simon from '../../images/About/Who-we-are/simon.png';
import Mathieu from '../../images/About/Who-we-are/mathieu.png';
import Alexandre from '../../images/About/Who-we-are/alexandre.png';
import AlexandreRoba from '../../images/About/Who-we-are/alexandre-roba.png';
import AnrienLebrun from '../../images/About/Who-we-are/adrien-lebrun.png';
import Francesca from '../../images/About/Who-we-are/francesca.png';
import Arthur from '../../images/About/Who-we-are/arthur.png';
import Nathalie from '../../images/About/Who-we-are/nat.png';

export default class WhoWeAre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.visibilityClick = this.visibilityClick.bind(this);
  }

  visibilityClick() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (<section className="section" id="who-we-are">
      <h1 className="title text-turquoise">
        <FormattedMessage
          id={`about.whoWeAre.title`}
          defaultMessage={`Who we are?`}
        />
      </h1>
      <h3 className="subtitle text-grey">
        <FormattedMessage
          id={`about.whoWeAre.subtitle`}
          defaultMessage={`Meet our team of ninjas`}
        />
      </h3>
      <div className={`container ${this.state.visible ? 'open' : ''}`}>
        <div className="row">
          <div className="employers-list justify-center">
            <div className="item">
              <div className="icon">
                <img src={AnrienLebrun} alt="adrien-lebrun" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.AnrienLebrun.position`}
                      defaultMessage={`title`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.AnrienLebrun.name`}
                      defaultMessage={`Adrien`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Alexandre} alt="alexandre" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Alexandre.position`}
                      defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Alexandre.name`}
                      defaultMessage={`Alexandre`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Ali} alt="ali" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Ali.position`}
                      defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Ali.name`}
                      defaultMessage={`Ali`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Amandine} alt="amandine" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Amandine.position`}
                      defaultMessage={`Legal & Insurance counsel`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Amandine.name`}
                      defaultMessage={`Amandine`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Arthur} alt="arthur" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Arthur.position`}
                      defaultMessage={`Business Analyst`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Arthur.name`}
                      defaultMessage={`Arthur Lemoine`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Degallaix.position`}
                      defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Degallaix.name`}
                      defaultMessage={`Cédric`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <div className="div-block" style={{ width: `${100}%`, height: `${100}%`, backgroundImage: 'radial-gradient(circle at -6% -9%, #317bda, #43c8cd)' }} />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Francois.position`}
                      defaultMessage={`Product Owner & Product Manager`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Francois.name`}
                      defaultMessage={`Cédric`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Denis} alt="denis" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                    id={`about.whoWeAre.team.Denis.position`}
                    defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                    id={`about.whoWeAre.team.Denis.name`}
                    defaultMessage={`Denis`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Dominique} alt="dominique" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Dominique.position`}
                      defaultMessage={`Sales Manager`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Dominique.name`}
                      defaultMessage={`Dominique`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Eleonore} alt="eleonore" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Eleonore.position`}
                      defaultMessage={`insurance / HR / Accounting & Marketing`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Eleonore.name`}
                      defaultMessage={`Eléonore`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Emilien} alt="emilien" width="100%" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Emilien.position`}
                      defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Emilien.name`}
                      defaultMessage={`Emilien`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Francesca} alt="francesca" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Francesca.position`}
                      defaultMessage={`Office Manager`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Francesca.name`}
                      defaultMessage={`Francesca`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Geert} alt="geert" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Geert.position`}
                      defaultMessage={`Head of IT Development`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Geert.name`}
                      defaultMessage={`Geert`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Hamza} alt="hamza" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Hamza.position`}
                      defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Hamza.name`}
                      defaultMessage={`Hamza`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={JeanCharles} alt="jean-charles" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.JeanCharles.position`}
                      defaultMessage={`Co-Founder & Managing Director`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.JeanCharles.name`}
                      defaultMessage={`Jean-Charles`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Juan} alt="juan" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Juan.position`}
                      defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Juan.name`}
                      defaultMessage={`Juan Carlos`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">

              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Laurent.position`}
                      defaultMessage={`Product Owner`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Laurent.name`}
                      defaultMessage={`Laurent`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Mathieu} alt="mathieu" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Mathieu.position`}
                      defaultMessage={`ux designer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Mathieu.name`}
                      defaultMessage={`Mathieu`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Nathalie} alt="nathalie" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Nathalie.position`}
                      defaultMessage={`UI Designer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Nathalie.name`}
                      defaultMessage={`Nathalie`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">

              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Pauline.position`}
                      defaultMessage={`Actuary`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Pauline.name`}
                      defaultMessage={`Pauline`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Quentin} alt="quentin" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Quentin.position`}
                      defaultMessage={`Co-Founder & Managing Director`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Quentin.name`}
                      defaultMessage={`Quentin`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Romuald} alt="romuald" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                    id={`about.whoWeAre.team.Romuald.position`}
                    defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                    id={`about.whoWeAre.team.Romuald.name`}
                    defaultMessage={`Romuald`}
                  />
                </p>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <img src={Simon} alt="simon" />
              </div>
              <div className="text">
                <p className="icon-title">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Simon.position`}
                      defaultMessage={`Software Engineer`}
                  />
                </p>
                <p className="icon-text">
                  <FormattedMessage
                      id={`about.whoWeAre.team.Simon.name`}
                      defaultMessage={`Simon`}
                  />
                </p>
              </div>
            </div>

            {/*<div className="item">*/}
              {/*<div className="icon">*/}
                {/*<img src={AlexandreRoba} alt="alexandre-roba" />*/}
              {/*</div>*/}
              {/*<div className="text">*/}
                {/*<p className="icon-title">*/}
                  {/*<FormattedMessage*/}
                    {/*id={`about.whoWeAre.team.AlexandreRoba.position`}*/}
                    {/*defaultMessage={`Software Engineer`}*/}
                  {/*/>*/}
                {/*</p>*/}
                {/*<p className="icon-text">*/}
                  {/*<FormattedMessage*/}
                    {/*id={`about.whoWeAre.team.AlexandreRoba.name`}*/}
                    {/*defaultMessage={`Alexandre Roba`}*/}
                  {/*/>*/}
                {/*</p>*/}
              {/*</div>*/}
            {/*</div>*/}
            <Link to="#" style={{ color: 'white' }}>
              <div className="item last-icon m-hidden">
                <FormattedMessage
                  id={`about.whoWeAre.team.WantToJoin`}
                  defaultMessage={`Want to join the team?`}
                />
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center d-hidden">
          <div className={this.state.visible ? 'd-none' : 'qc-uppercontainer'}>
            <div className="qc-container">
              <div className="qc"></div>
              <div className="qc middle"></div>
              <div className="qc"></div>
            </div>
          </div>
          <div className="btn-open text-grey">
            See all the team
            <div className="text-blue" onClick={this.visibilityClick}>
              <i className="fa fa-angle-down" />
            </div>
          </div>
          <a className="btn hidden-sm-down btn-turquoise text-center">
            <FormattedMessage
              id={`about.whoWeAre.team.WantToJoin`}
              defaultMessage={`Want to join the team?`}
            />
          </a>
        </div>
      </div>
    </section>);
  }
}
