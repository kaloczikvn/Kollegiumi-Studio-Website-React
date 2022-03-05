import { ModelEvent, ModelImage, ModelTeam } from "../models/Models";

const API_URL = process.env.REACT_APP_ROOT_URL;

export const GetImageUrl = (item: ModelEvent|ModelTeam|ModelImage) => {
    return API_URL + "/images/" + (item?.image ?? "");
};
