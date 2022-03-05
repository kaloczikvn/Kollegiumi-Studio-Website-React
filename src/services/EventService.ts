import HttpClient from "../helpers/HttpClient";

export const getEvents = async () => {
    return await HttpClient({
        url: "events.json",
        method: "get",
    });
};

export const getTeam = async () => {
    return await HttpClient({
        url: "team.json",
        method: "get",
    });
};

export const getGallery = async () => {
    return await HttpClient({
        url: "gallery.json",
        method: "get",
    });
};
