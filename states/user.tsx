import { atom } from "recoil";

export const LoginedUserStore = atom({
  key: "LoginedUserStore",
  default: {
    Logined: false,
    name: "방문자",
    id: "",
    pw: "",
    univ: "",
  },
});
