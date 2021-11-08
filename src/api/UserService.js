import tellDankeesTo from "./tellDankeesTo";
import * as tokenService from '../utils/tokenService';


const create = (data) => {
    return tellDankeesTo.post('/users', data);
};

const login = (data) => {
    return tellDankeesTo.post("/auth/login", data);
};

function getUser() {
    let user = tokenService.getUserFromToken();
    console.log("DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ", user);

    return user;
}

const update = (id, data) => {
    return tellDankeesTo.put(`/users/${id}`, data)
}

export { create, login, getUser, update };