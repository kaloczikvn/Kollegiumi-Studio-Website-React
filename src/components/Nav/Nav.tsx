import React from "react";

import logo from "../../assets/img/logo.png";
import {
    VolumeUpIcon,
    UsersIcon,
    PhoneIcon,
    CalendarIcon
} from "react-line-awesome";

import "./Nav.scss";

const Nav: React.FC = () => (
    <>
        <div className="nav">
            <div className="container">
                <div className="nav-menu">
                    <a href="#" className="nav-link">
                        <CalendarIcon />
                        <span>
                            Események
                        </span>
                    </a>
                    <a href="#" className="nav-link">
                        <VolumeUpIcon />
                        <span>
                            Rólunk
                        </span>
                    </a>
                    <a href="#" className="nav-link">
                        <UsersIcon />
                        <span>
                            Csapatunk
                        </span>
                    </a>
                    <a href="#" className="nav-link">
                        <PhoneIcon />
                        <span>
                            Kapcsolat
                        </span>
                    </a>
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
            <a className="nav-brand" href="#">
                <img src={logo} alt="Kollégiumi Stúdió" />
            </a>
        </div>
    </>
);

export  default Nav;
