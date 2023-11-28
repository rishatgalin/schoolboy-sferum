import axios, { type AxiosRequestConfig } from "axios";

export module Config {
  export module DefaultRequestConfig {
    export const responseType = "json";
  }

  export function createClient(axiosConfig?: AxiosRequestConfig) {
    const baseURL = "https://ms-edu.tatar.ru";
    const instance = axios.create({
      ...Config.DefaultRequestConfig,
      ...axiosConfig,
      baseURL,
    });

    instance.interceptors.request.use(
      (config) => {
        const token = "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxNjMxNjkzIiwic2NwIjoib3BlbmlkIHByb2ZpbGUiLCJtc2giOiJhNzIzYTQ0NC00OGE1LTQyMGItYjc1MS03YTk3YjQyY2UwODgiLCJpc3MiOiJodHRwczpcL1wvbXMtZWR1LnRhdGFyLnJ1Iiwic3NvIjoiMzEyMzUxYmZmMDc5ODk3NjkwOTc2NjBhNTYzOTUwNjUiLCJhdWQiOiIyOjEiLCJuYmYiOjE3MDExODk2ODUsImF0aCI6ImthdXRoIiwicmxzIjoiezE6WzIwOjI6WzUwMDkwNDY4M10sMzA6NDpbNTAwOTA0NjgzXSw0MDoxOls1MDA5MDQ2ODNdLDE4MzoxNjpbNTAwOTA0NjgzXSwyMTE6MTk6WzUwMDkwNDY4M11dfSIsInJnbiI6IjE2IiwiZXhwIjoxNzAyMDUzNjg1LCJpYXQiOjE3MDExODk2ODUsImp0aSI6IjZkMDljZmNhLTNlY2UtNDJkMC04OWNmLWNhM2VjZTQyZDAxNCJ9.gjicgAfdyelEWq0MnCk7wt4gFVbYiQ-Hz5xYVJRpTTgTlowLaZavVOUIDHLKeCnPLiM_MALDwTSurx4zbjH9tZoWerHKd1pSkS7L-gJuVtPD63o1n5hWjZFRKvWWHKlOBbgeTxfHcCacg2lCoknyqvV1Qh4lsqRbfPvqJ_6jXourR67d7K8vo24wUPhtkEOoBDAzKFuEOehDPjdylqMOMe8dC3hVlQlsrVSq4en_9EMwSxlvhs6FgmpG3B-neDFIdbuQnvMn6XFl5OPEIwSdeGuKeMjmd6aO4a361CXUROEo02RYAf3kKnPzLKLvMlDmODvXIE8dcu4pYvhZUZY8-g";
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
