export const setToken = (token) => {
    sessionStorage.setItem("user_token", token);
};
export const getToken = () => {
    return sessionStorage.getItem("user_token");
};
export const removeToken = () => {
    sessionStorage.removeItem("user_token");
};