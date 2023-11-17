export function setJWT(token) {
    localStorage.setItem("jwt_token", token);
}
export function getJWT() {
    return localStorage.getItem("jwt_token");
}
export function removeJWT() {
    localStorage.removeItem("jwt_token");
}
