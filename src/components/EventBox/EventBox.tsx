import React from "react";
import Atropos from "atropos/react";

import { GetImageUrl } from "../../helpers/ImageHelper";
import { ModelEvent } from "../../models/Models";

import "./EventBox.scss";

interface Props {
    event: ModelEvent,
}

const EventBox: React.FC<Props> = ({ event }) => (
    <a
        href={event.url??"#"}
        className="event-box"
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
            <img src={GetImageUrl(event)} alt="" data-atropos-offset="0" />
            <div className="overlay" data-atropos-offset="0" />
            <div className="information" data-atropos-offset="2">
                <span className="title">
                    {event.title??""}
                </span>
                {event.subTitle &&
                    <span className="date">
                        {event.subTitle??""}
                    </span>
                }
            </div>
        </Atropos>
    </a>
);

export  default EventBox;
