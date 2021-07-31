import axios from "axios";
import { Group } from "../models/Group";
import { AUTH_TOKEN} from "./base";
import { BASE_URL } from "./base";

interface GroupRequest {
    limit ? : number;
    iffset ? : number;
    query ? : string;
    status: "all-groups" | "favourite" | "archived";
}

export interface GroupResponse {
    data: Group[];
}

export interface Datum {
    id:                   number;
    name:                 string;
    description:          string;
    group_image_url:      string;
}

export const fetchGroups = (data ? : GroupRequest) => {
    const url = BASE_URL + "/groups";

    const token = localStorage.getItem(AUTH_TOKEN);
    return axios.get<GroupResponse>(url, {
        params: data , headers:{ Authorization : token }
    }).then((response) => {

        console.log(response.data.data);
    return response.data.data;});
}