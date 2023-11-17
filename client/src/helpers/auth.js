export function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
}
export function getUser() {
    const user = localStorage.getItem("user");
    if (user) return JSON.parse(user);
}
export function removeUser() {
    localStorage.removeItem("user");
}
