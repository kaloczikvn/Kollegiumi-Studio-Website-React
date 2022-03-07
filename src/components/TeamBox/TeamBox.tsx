import React from "react";
import Atropos from "atropos/react";

import { GetImageUrl } from "../../helpers/ImageHelper";
import { ModelTeam } from "../../models/Models";

import "./TeamBox.scss";

interface Props {
    team: ModelTeam,
}

const TeamBox: React.FC<Props> = ({ team }) => (
    <div className="team-box">
        <Atropos
            className="atropos"
            rotateXMax={15}
            rotateYMax={15}
            activeOffset={30}
            shadowOffset={30}
            rotateXInvert={true}
            rotateYInvert={true}
            shadow={false}
            rotateTouch={false}
        >
            <img src={GetImageUrl(team)} alt="" data-atropos-offset="0" />
            <div className="overlay" data-atropos-offset="0" />
            <div className="information" data-atropos-offset="5">
                <span className="title">
                    {team.name??""}
                </span>
                {team.role &&
                    <span className="date">
                        {team.role??""}
                    </span>
                }
            </div>
        </Atropos>
    </div>
);

export  default TeamBox;
