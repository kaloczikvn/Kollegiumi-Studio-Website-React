import React from "react";

import {
    VolumeUpIcon,
    UsersIcon,
    PhoneIcon,
    CalendarIcon
} from "react-line-awesome";
import { Link } from "react-scroll";

import logo from "../../assets/img/logo.png";
import vinyl from "../../assets/img/vinyl.png";
import stylus from "../../assets/img/stylus.png";

import "./Nav.scss";

const Nav: React.FC = () => {
    return (
        <>
            <div className="nav">
                <div className="container">
                    <div className="nav-menu">
                        <Link
                            activeClass="active"
                            to="events"
                            className="nav-link"
                            duration={400}
                            offset={-150}
                            spy
                            smooth
                        >
                            <CalendarIcon />
                            <span>
                                Események
                            </span>
                        </Link>
                        <Link
                            activeClass="active"
                            to="aboutus"
                            className="nav-link"
                            duration={400}
                            offset={-150}
                            spy
                            smooth
                        >
                            <VolumeUpIcon />
                            <span>
                                Rólunk
                            </span>
                        </Link>
                        <Link
                            activeClass="active"
                            to="team"
                            className="nav-link"
                            duration={400}
                            offset={-150}
                            spy
                            smooth
                        >
                            <UsersIcon />
                            <span>
                                Csapatunk
                            </span>
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            className="nav-link"
                            duration={400}
                            offset={-150}
                            spy
                            smooth
                        >
                            <PhoneIcon />
                            <span>
                                Kapcsolat
                            </span>
                        </Link>
                    </div>
                </div>

                {/*<div className="brand">
                    <img src={logo} alt="Logo" />
                </div>
                <a href="#">
                    asd
                </a>
                <a href="#">
                    asd
                </a>*/}
            </div>
            <div className="container">
                <Link
                    to="events"
                    className="nav-brand"
                    duration={400}
                    smooth
                >
                    <img src={vinyl} alt="" className="vinyl" />
                    <img src={stylus} alt="" className="stylus" />
                    <img src={logo} alt="Kollégiumi Stúdió" className="logo" />
                </Link>
            </div>
        </>
    );
};

export  default Nav;
