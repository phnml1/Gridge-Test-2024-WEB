import axios, { AxiosInstance } from "axios";
import { JWT_KEY } from "../../config/constant";
import * as jsonwebtoken from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const requestNotJwt: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,
  headers: {
    accept: "application/json",
  },
});
export const request: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 2500,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem(JWT_KEY)}`,
  },
});

request.interceptors.request.use(
  async (config) => {
    const jwt = window.localStorage.getItem(JWT_KEY) ?? "";
    const decodedJwt: JwtPayload = jsonwebtoken.decode(jwt) as JwtPayload;
    const currentTime = new Date().getTime() / 1000;

    if (decodedJwt.exp ?? 0 < currentTime) {
      try {
        // 서버 토근 재발급요청
        const response = await axios.post(
          `${process.env.REACT_APP_API}/auth/jwt`,
          {
            jwt: jwt,
          }
        );
        const newToken = response.data.result.jwt;
        window.localStorage.setItem(JWT_KEY, newToken);
      } catch (error) {
        console.error("토큰을 갱신하는 동안 오류가 발생했습니다.", error);
      }
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
requestNotJwt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request;
