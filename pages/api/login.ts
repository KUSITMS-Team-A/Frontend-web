import axios from "axios";

const LoginApiBase = axios.create({
  baseURL: "https://jedero.site/",
  timeout: 3000,
});

interface SignUpApiProps {
  email: string;
  password: string;
  type: string;
  typeName: string;
}

export const signUpApi = async ({
  email,
  password,
  type,
  typeName,
}: SignUpApiProps) => {
  const url = "/auth/join";
  try {
    const response = await LoginApiBase.post(url, {
      password,
      email,
      type,
      typeName,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
