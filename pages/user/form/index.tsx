import React, { useEffect, useState } from "react";
import * as phase from "@/components/styles/user/first/style";
import * as styles from "@/components/styles/user/second/style";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import { Checkbox, FilledInput, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import styled from "@emotion/styled";

interface FormPageProps {}

enum Unions {
  first = "first",
  second = "second",
  third = "third",
}

interface FormData {
  univ: string;
  first: belong;
  second: belong;
  third: belong;
  unionName: string;
}

interface belong {
  checked: boolean;
  name: string;
}

const FormPage: React.FC<FormPageProps> = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    univ: "",

    first: { checked: false, name: "" },
    second: { checked: false, name: "" },
    third: { checked: false, name: "" },

    unionName: "",
  });

  useEffect(() => {
    console.log(JSON.stringify(formData));
  }, [formData]);

  return (
    <phase.Container>
      <phase.PhaseBox>
        <phase.PhaseItem>
          <phase.PhaseEllipse>1</phase.PhaseEllipse>
          <phase.PhaseTitle>약관동의</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse selected={true}>2</phase.PhaseEllipse>
          <phase.PhaseTitle selected={true}>정보입력</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>3</phase.PhaseEllipse>
          <phase.PhaseTitle>인증절차</phase.PhaseTitle>
        </phase.PhaseItem>
        <phase.ConnectLine />
        <phase.PhaseItem>
          <phase.PhaseEllipse>4</phase.PhaseEllipse>
          <phase.PhaseTitle>가입완료</phase.PhaseTitle>
        </phase.PhaseItem>
      </phase.PhaseBox>
      <phase.AgreementBox>
        <styles.AskContainer>
          <styles.AskWrapper>
            <styles.AskTitle>학교*</styles.AskTitle>
            <styles.AskContents>
              <FilledInput
                name="Univ"
                style={{ width: "100%" }}
                endAdornment={<SearchOutlinedIcon />}
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    univ: e.target.value,
                  }));
                }}
              />
            </styles.AskContents>
          </styles.AskWrapper>

          <styles.AskWrapper>
            <styles.AskTitle>학생회 소속*</styles.AskTitle>
            <styles.AskContents>
              <styles.AskSubBox>
                <styles.HorizontalBox>
                  <styles.AskSubTitle
                    className={css`
                      column-gap: 10px;
                      margin-right: 10px;
                    `}
                  >
                    <Checkbox
                      icon={<CircleIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      name={Unions.first}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          first: { ...prev.first, checked: true },
                          second: { checked: false, name: "" },
                          third: { checked: false, name: "" },
                        }));
                      }}
                    />
                    <Label>총 학생회</Label>
                  </styles.AskSubTitle>
                </styles.HorizontalBox>

                <styles.HorizontalBox>
                  <styles.AskSubTitle
                    className={css`
                      column-gap: 10px;
                      margin-right: 10px;
                    `}
                  >
                    <Checkbox
                      icon={<CircleIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      name={Unions.second}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          first: { checked: false, name: "" },
                          second: { ...prev.second, checked: e.target.checked },
                          third: { checked: false, name: "" },
                        }));
                      }}
                    />
                    <Label>단과대 학생회</Label>
                  </styles.AskSubTitle>
                  <styles.AskSubContent>
                    <TextField
                      variant="filled"
                      style={{ width: "100%" }}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          second: { ...prev.second, name: e.target.value },
                        }));
                      }}
                    />
                  </styles.AskSubContent>
                </styles.HorizontalBox>

                <styles.HorizontalBox>
                  <styles.AskSubTitle
                    className={css`
                      column-gap: 10px;
                      margin-right: 10px;
                    `}
                  >
                    <Checkbox
                      icon={<CircleIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      name={Unions.third}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          first: { checked: false, name: "" },
                          second: { checked: false, name: "" },
                          third: { ...prev.third, checked: e.target.checked },
                        }));
                      }}
                    />
                    <Label>과 학생회</Label>
                  </styles.AskSubTitle>
                  <styles.AskSubContent>
                    <TextField
                      variant="filled"
                      style={{ width: "100%" }}
                      value={formData.third.name}
                      onChange={(e)=>{
                        setFormData(prev=>)
                      }}
                    />
                  </styles.AskSubContent>
                </styles.HorizontalBox>
              </styles.AskSubBox>
            </styles.AskContents>
          </styles.AskWrapper>

          <styles.AskWrapper>
            <styles.AskTitle>학생회 명*</styles.AskTitle>
            <styles.AskContents>
              <TextField
                name="nameOfUnion"
                variant="filled"
                style={{ width: "100%" }}
              />
            </styles.AskContents>
          </styles.AskWrapper>
        </styles.AskContainer>
        <phase.NextBtn
          variant="contained"
          onClick={() => {
            router.push("/user/auth");
          }}
        >
          다음
        </phase.NextBtn>
      </phase.AgreementBox>
    </phase.Container>
  );
};

export default FormPage;

const Label = styled.p`
  font-size: 1rem;
  font-weight: 500;
  width: 9rem;
`;
