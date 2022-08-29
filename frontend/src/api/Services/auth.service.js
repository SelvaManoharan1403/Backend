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
}
const forgetPassword = (token) => {
  return api
    .post("login", {
      resetToken: token
    })
    .then((response) => {
      return response.data;
    });
};
const changePasswordService = (resetToken) => {
  return api
    .post("changePassword", {
      resetToken
    })
    .then((response) => {
      return response.data;
    });
};
const resetPasswordService = (password, resetToken) => {
  return api
    .put("changePassword", {
      password,
      resetToken,
    })
    .then((response) => {
      return response.data;
    });
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  privateUser,
  forgetPassword,
  changePasswordService,
  resetPasswordService
};
export default AuthService;