import React from 'react';
import Quentin from '../../images/who-we-are/quentin.png';
import JeanCharles from '../../images/who-we-are/jean-charles.png';
import Eleonore from '../../images/who-we-are/eleonore.png';
import Geert from '../../images/who-we-are/geert.png';
import Denis from '../../images/who-we-are/denis.png';
import Ali from '../../images/who-we-are/ali.png';
import Romuald from '../../images/who-we-are/romuald.png';
import Juan from '../../images/who-we-are/juan.png';
import Amandine from '../../images/who-we-are/amandine.png';
import Dominique from '../../images/who-we-are/dominique.png';
import Hamza from '../../images/who-we-are/hamza.png';
import Emilien from '../../images/who-we-are/emilien.png';
import Simon from '../../images/who-we-are/simon.png';
import Mathieu from '../../images/who-we-are/mathieu.png';
import Alexandre from '../../images/who-we-are/alexandre.png';
import AlexandreRoba from '../../images/who-we-are/alexandre-roba.png';
import AnrienLebrun from '../../images/who-we-are/adrien-lebrun.png';
import Francesca from '../../images/who-we-are/francesca.png';
import Arthur from '../../images/who-we-are/arthur.png';

export default class WhoWeAre extends React.Component {
  render() {
    return <section className="section" id="who-we-are">
        <h1 className="title text-turquoise">Who we are?</h1>
        <h3 className="subtitle text-grey">Meet our team of ninjas</h3>
        <div className="container">
            <div className="row icons">
                <div className="col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Quentin} alt="quentin"/>
                        </div>
                      <div className="text">
                            <p className="icon-title">
                                Co-Founder & Managing Director
                            </p>
                            <p className="icon-text">
                              Quentin Colmant
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={JeanCharles} alt="jean-charles"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Co-Founder & Managing Director
                            </p>
                            <p className="icon-text">
                                Jean-Charles Velge
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Eleonore} alt="eleonore"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                insurance / HR / Accounting & Marketing
                            </p>
                            <p className="icon-text">
                                Eléonore Speeckaert
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Geert} alt="geert"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Head of IT Development
                            </p>
                            <p className="icon-text">
                                Geert Vandendriessche
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Denis} alt="denis"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Full Stack Dev
                            </p>
                            <p className="icon-text">
                                Denis Schmitz
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Ali} alt="ali"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Back End Dev
                            </p>
                            <p className="icon-text">
                                Ali El Gariani
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row icons">
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Romuald} alt="romuald"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Full Stack Dev
                            </p>
                            <p className="icon-text">
                                Romuald Deshayes
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Juan} alt="juan"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Front End Dev
                            </p>
                            <p className="icon-text">
                                Juan Carlos Sanchez
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Amandine} alt="amandine"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Legal & Insurance counsel
                            </p>
                            <p className="icon-text">
                                Amandine de Lhoneux
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Dominique} alt="dominique"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Sales Manager
                            </p>
                            <p className="icon-text">
                                Dominique Depondt
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div style={{width: 150 + 'px', height: 150 + 'px', background: '#f00'}}></div>
                        <div className="text">
                            <p className="icon-title">
                                UI Designer
                            </p>
                            <p className="icon-text">
                                Nathalie Francotte
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Hamza} alt="hamza"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Junior dev
                            </p>
                            <p className="icon-text">
                                Hamza Mounir
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row icons">
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Emilien} alt="emilien"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Junior dev
                            </p>
                            <p className="icon-text">
                                Emilien Durieu
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Simon} alt="simon"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Junior dev
                            </p>
                            <p className="icon-text">
                                Simon Parmentier
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Mathieu} alt="mathieu"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                ux designer
                            </p>
                            <p className="icon-text">
                                Mathieu Nisen
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Alexandre} alt="alexandre"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Software Engineer
                            </p>
                            <p className="icon-text">
                                Alexandre Cys
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={AlexandreRoba} alt="alexandre-roba"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Software Engineer
                            </p>
                            <p className="icon-text">
                                Alexandre Roba
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={AnrienLebrun} alt="adrien-lebrun"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                title
                            </p>
                            <p className="icon-text">
                                Adrien Lebrun
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row icons">
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <div style={{width: 150 + 'px', height: 150 + 'px', background: '#f00'}}></div>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Software Engineer
                            </p>
                            <p className="icon-text">
                                Cédric François
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <div style={{width: 150 + 'px', height: 150 + 'px', background: '#f00'}}></div>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                Software Engineer
                            </p>
                            <p className="icon-text">
                                Cédric Degallaix
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Francesca} alt="francesca"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                title
                            </p>
                            <p className="icon-text">
                                Francesca Nicolini
                            </p>
                        </div>
                    </div>

                </div>
                <div className="icon col-md-2">
                    <div className="item">
                        <div className="icon">
                            <img src={Arthur} alt="arthur"/>
                        </div>
                        <div className="text">
                            <p className="icon-title">
                                title
                            </p>
                            <p className="icon-text">
                                Arthur Lemoine
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icon col-md-2">
                  <div className="last-icon"><p> Want to join the team?</p></div>
                </div>

            </div>
        </div>
    </section>;
  }
}
