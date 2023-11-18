import * as phase from "@/components/styles/user/first/style";
import * as styles from "@/components/styles/user/third/style";
import { Button, Checkbox, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface AuthProps {
  name?: string;
  isLogin?: boolean;
}

const AuthPage: React.FC<AuthProps> = () => {
  const router = useRouter();
  return (
    <phase.Container>
      <Head>
        <title>회원가입</title>
        <meta name="signUp" content="회원가입" />
      </Head>
      <phase.PhaseBox>
        <phase.PhaseItem>
          <phase.PhaseEllipse>1</phase.PhaseEllipse>
          <phase.PhaseTitle>약관동의</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>2</phase.PhaseEllipse>
          <phase.PhaseTitle>정보입력</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse selected={true}>3</phase.PhaseEllipse>
          <phase.PhaseTitle selected={true}>인증절차</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>4</phase.PhaseEllipse>
          <phase.PhaseTitle>가입완료</phase.PhaseTitle>
        </phase.PhaseItem>
      </phase.PhaseBox>
      <phase.AgreementBox>
        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>대표자 이메일*</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskContentInnerBox>
              <styles.AskInput
                variant="filled"
                placeholder="학교 도메인 이메일로 작성해주세요"
              />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                인증번호
              </styles.AskButton>
            </styles.AskContentInnerBox>
            <styles.AskContentInnerBox>
              <styles.AskInput variant="filled" />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                확인
              </styles.AskButton>
            </styles.AskContentInnerBox>
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>대표자 휴대폰*</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskContentInnerBox>
              <styles.AskInput
                variant="filled"
                placeholder="휴대폰 번호 '-' 제외하고 입력"
              />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                인증번호
              </styles.AskButton>
            </styles.AskContentInnerBox>
            <styles.AskContentInnerBox>
              <styles.AskInput variant="filled" placeholder="인증번호 입력" />
              <styles.AskButton variant="contained" style={{ display: "flex" }}>
                확인
              </styles.AskButton>
            </styles.AskContentInnerBox>
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>비밀번호</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskInput variant="filled" />
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>비밀번호 확인</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <styles.AskInput variant="filled" />
          </styles.AskContent>
        </styles.AskBox>

        <styles.AskBox>
          <styles.AskTitle>
            <styles.AskWord>대표자 임명증 사진*</styles.AskWord>
          </styles.AskTitle>
          <styles.AskContent>
            <Button variant="outlined" style={{ marginRight: "auto" }}>
              파일 선택
            </Button>
          </styles.AskContent>
        </styles.AskBox>

        <phase.NextBtn
          variant="contained"
          onClick={() => {
            router.push("/user/complete");
          }}
        >
          다음
        </phase.NextBtn>
      </phase.AgreementBox>
    </phase.Container>
  );
};

export default AuthPage;
