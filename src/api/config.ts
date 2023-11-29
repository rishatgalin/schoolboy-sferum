import axios, { type AxiosRequestConfig } from "axios";

export module Config {
  export module DefaultRequestConfig {
    export const responseType = "json";
  }

  export function createClient(axiosConfig?: AxiosRequestConfig) {
    const baseURL = "https://dev-schoolboy.platform.tatar.ru/ms-edu";
    const instance = axios.create({
      ...Config.DefaultRequestConfig,
      ...axiosConfig,
      baseURL,
    });

    instance.interceptors.request.use(
      (config) => {
        
        const token = "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxNjMxNjkzIiwic2NwIjoib3BlbmlkIHByb2ZpbGUiLCJtc2giOiJhNzIzYTQ0NC00OGE1LTQyMGItYjc1MS03YTk3YjQyY2UwODgiLCJpc3MiOiJodHRwczpcL1wvbXMtZWR1LnRhdGFyLnJ1Iiwic3NvIjoiMzEyMzUxYmZmMDc5ODk3NjkwOTc2NjBhNTYzOTUwNjUiLCJhdWQiOiIyOjEiLCJuYmYiOjE3MDEyNDQwMjIsImF0aCI6ImthdXRoIiwicmxzIjoiezE6WzIwOjI6WzUwMDkwNDY4M10sMzA6NDpbNTAwOTA0NjgzXSw0MDoxOls1MDA5MDQ2ODNdLDE4MzoxNjpbNTAwOTA0NjgzXSwyMTE6MTk6WzUwMDkwNDY4M11dfSIsInJnbiI6IjE2IiwiZXhwIjoxNzAyMTA4MDIyLCJpYXQiOjE3MDEyNDQwMjIsImp0aSI6ImEzYzI0NDBjLWNjMjUtNDljMC04MjQ0LTBjY2MyNTM5YzA2OCJ9.HeapQRdq8MReMpP5IvVYnCBwLL2ndJ8LecHa-ADWeVmk24-fKIKZntCU61l5a_PukMzsYHTR7KcbaOkBvPQcm3jtBcfvOySkolwuWU2POXxPmk-JLB8NokfvPEI5OQrRNeRGE8jZcLQ7zPpx4gIGhaZOGmy-QYiDIKjxNk2XR57E7y1U62dL-U7XtuNWKctyho2h6uxS62JyXDXpC2tFMYBqTj34MDEUOMwcNMUI5QUrrcTF-SH-TC9MDS0dsRJVd7-t5yE4b2OohVJbZesOWzun_k_dJhQxUv2Xl-xsaIKEgYcxlR_QvVTLHpGc3lBaoS2FS1lvyyCEZ9hucICWSw";
        if (config.headers && token) config.headers["Authorization"] = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return instance;
  }
}

const client = Config.createClient();
export default client;
