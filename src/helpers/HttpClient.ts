import Axios from "axios";

const API_URL = process.env.REACT_APP_ROOT_URL;

export const HttpClient = ({
    method = "get",
    url = "",
    data = {},
    params = {},
    timeout = 15000,
    additionalHeaders = {},
    contentType = "application/json",
    cancelToken = undefined,
}: any) => {
    let headers = {
        //"Content-Type": contentType,
        //"Access-Control-Allow-Origin": "*",
        //"Access-Control-Allow-Headers": "*",
        //Accept: "application/json, text/plain",
        "Content-Type" : 'application/x-www-form-urlencoded; charset=UTF-8',
        ...additionalHeaders,
    };

    if (contentType === "multipart/form-data") {
        let oldData = data;
        data = new FormData();
        for (var key in oldData) {
            data.append(key, oldData[key]);
        }
    }

    return Axios({
        url: `${API_URL}/${url}`,
        method,
        timeout,
        headers,
        data,
        params,
        cancelToken,
    });
};

export default HttpClient;
