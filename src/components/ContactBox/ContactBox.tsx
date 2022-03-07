import React from "react";
import Atropos from "atropos/react";

import "./ContactBox.scss";

interface Props {
    url: string;
    children: any;
}

const ContactBox: React.FC<Props> = ({
    url,
    children
}) => (
    <a
        href={url??"#"}
        className="contact-box"
        target="_blank"
    >
        <Atropos
            className="atropos"
            rotateXMax={3}
            rotateYMax={3}
            activeOffset={35}
            shadowOffset={35}
            rotateXInvert={true}
            rotateYInvert={true}
            shadow={false}
            rotateTouch={false}
        >
            <div data-atropos-offset="2">
                {children??""}
            </div>
        </Atropos>
    </a>
);

export  default ContactBox;
