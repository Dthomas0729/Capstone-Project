import axios from "axios";

console.log("NODE ENV WHAT DO YOU MEAN?", process.env.NODE_ENV);
let HOST;
if (process.env.NODE_ENV !== "production") {
    HOST = "http://localhost:4000/api/";
} else {
    HOST = "https://smoker-cinemas.herokuapp.com/api/";
}

export default axios.create({
    baseURL: HOST,
    headers: {
        "Content-type": "application/json",
    },
});