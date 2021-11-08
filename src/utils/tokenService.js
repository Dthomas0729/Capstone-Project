import tellDankeesTo from "../api/tellDankeesTo";

function setToken(token) {
    console.log("SETTING TOKEN: ", token);
    if (token) {
        localStorage.setItem("token", token);
        // allllllsooooo...add to the auth header
        tellDankeesTo.defaults.headers.common["Authorization"] =
            "Bearer " + token;
    } else {
        localStorage.removeItem("token");
        tellDankeesTo.defaults.headers.common["Authorization"] = null;
    }
}

function getToken() {
    let token = localStorage.getItem("token");
    tellDankeesTo.defaults.headers.common["Authorization"] =
        "Bearer " + token;
    console.log(
        "GETTING TOKEN FROM LOCAL STORAGE AND SETTING HEADERS: ",
        token
    );
    if (token) {
        // Check if expired, remove if it is
        const payload = JSON.parse(atob(token.split(".")[1]));
        console.log("DECODED PAYLOAD: ", payload);
        // JWT's exp is expressed in seconds, not milliseconds, so convert
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem("token");
            tellDankeesTo.defaults.headers.common["Authorization"] = null;
            token = null;
        }
    }
    return token;
}

function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

// const refreshTokenSetup = (res) => {
    
//     let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    
//     const refreshToken = async () => {
//         const newAuthRes = await res.reloadAuthRespond();
//         refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

//         console.log('newAuthRes:', newAuthRes);
//         console.log('new auth token:', newAuthRes.id_token);

//         // Setup the other timer after the first one
//         setTimeout(refreshToken, refreshTiming);
//     }
//     // Setup first refresh timer
//     setTimeout(refreshToken, refreshTiming);
// }

export { setToken, getToken, getUserFromToken };