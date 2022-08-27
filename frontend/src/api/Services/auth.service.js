import api from "./api";
import TokenService from "./token.service";

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'authorization': TokenService.getLocalAccessToken(),
}

const register = (username, email, password) => {
  return api.post("signUp", {
    username,
    email,
    password
  });
};
const login = (emailId, password) => {
  return api
    .post("login", {
      emailId,
      password
    })
    .then((response) => {
      //console.log(response);
      if (response.data.data.accessToken) {
        //console.log(response.data.data)
        TokenService.setUser(response.data.data);
      }
      return response.data;
    });
};
const logout = () => {
  TokenService.removeUser();
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const privateUser = () => {
  return api
    .get("privateApi", headers)
    .then((response) => {
      //console.log(response);
      return response.data;
    });
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  privateUser,
};
export default AuthService;