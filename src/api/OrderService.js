import tellDankeesTo from "./tellDankeesTo";
import * as tokenService from '../utils/tokenService';


// const getAll = () => {
//     return tellDankeesTo.get("/order");
// };

const get = (id) => {
    return tellDankeesTo.get(`/order/${id}`);
};

const create = (data) => {
    return tellDankeesTo.post("/order", data);
};

const update = (id, data) => {
    return tellDankeesTo.put(`/order/${id}`, data);
};

const remove = (id) => {
    return tellDankeesTo.delete(`/order/${id}`);
};

export { get, create, update, remove };