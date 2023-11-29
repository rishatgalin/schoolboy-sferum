import client from "./config";

export namespace Service {
  export function getExternal() {
    return client.get<unknown>("/v2/external-partners/list");
  }

  // export function getChoice() {
  //   return client.get<unknown>("/choice/partners", {
  //     params: {
  //       auto_connect: "vk",
  //       return_url: window.location.origin
  //     }
  //   });
  // }
}