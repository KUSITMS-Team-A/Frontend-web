import axios from "axios";

const apiBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000,
});

// interfaces
interface LoginProps {
  email: string;
  password: string;
}

interface SignUpProps {
  email: string;
  password: string;
  type: "총학생회" | "단과대학생회" | "과학생회";
  typeName: string;
  proofImageUrl: string;
}

// 로그인
export const login = async ({ email, password }: LoginProps) => {
  try {
    const loginEndpoint = process.env.NEXT_PUBLIC_LOGIN_ENDPOINT;
    const response = await apiBase.post(loginEndpoint, { email, password });

    console.log("로그인 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("로그인 오류:", error);
    throw error;
  }
};

// 회원가입
export const SignUp = async ({
  email,
  password,
  type,
  typeName,
  proofImageUrl,
}: SignUpProps) => {
  try {
    const signUpEndpoint = process.env.NEXT_PUBLIC_SIGNUP_ENDPOINT;
    const response = await apiBase.post(signUpEndpoint, {
      email,
      password,
      type,
      typeName,
      proofImageUrl,
    });

    return response.data;
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};

// 이미지 업로드 (회원가입 전에)
export const CreateImage = async (file: File) => {
  try {
    const createImageEndpoint = process.env.NEXT_PUBLIC_CREATE_IMAGE_ENDPOINT;
    const formData = new FormData();
    formData.append("file", file);

    const response = await apiBase.post(createImageEndpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("업로드 오류:", error);
    throw error;
  }
};
