import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, AUTH_TOKEN } from "./base";




interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
}

  




export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    console.log(data);
    return axios.post < LoginResponse > (url, data).then((response) => {
        console.log(response.data.token);
        localStorage.setItem(AUTH_TOKEN, response.data.token);
        return response.data.user;


    });
};

export const logout = () => {
    localStorage.removeItem(AUTH_TOKEN);
}
