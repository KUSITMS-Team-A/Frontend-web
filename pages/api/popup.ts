import axios from "axios";

const apiBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
});

export const getPopups = async (pageNumber: number) => {
  try {
    const userSession = sessionStorage.getItem("userSession");
    let token = "";
    if (userSession) {
      const parsedSession = JSON.parse(userSession);
      token = parsedSession.user?.token || "";
    } else {
      console.log("유저세션 없다리 큰일큰일");
    }

    const response = await apiBase.get(
      `${process.env.NEXT_PUBLIC_GET_POPUP}/${pageNumber}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (e) {
    console.error(`Error 코드 : ${e}`);
  }
};
