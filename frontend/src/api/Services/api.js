import axios from "axios";
import TokenService from "./token.service";
const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
       config.headers["authorization"] =  token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "login" && err.response) {
      // Access Token was expired
      if (err.response.status === 403 && !originalConfig._retry) {
        originalConfig._retry = true;
        instance.post("refreshToken", {
          refreshToken: TokenService.getLocalRefreshToken(),
        }).then((rs) => {
          const tokenData = rs.data.data;
          TokenService.updateLocalAccessToken(tokenData);
          return instance(originalConfig);
        }).catch((_error) => {
          // Refresh Token was expired
          TokenService.removeUser()
          return Promise.reject(_error);
        });
      }
    }
    return Promise.reject(err);
  }
);
export default instance;