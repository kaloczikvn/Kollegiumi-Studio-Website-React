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
