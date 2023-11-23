import styled from "@emotion/styled";
import * as styles from "@/components/styles/popup/style";
import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@/assets/svg/Search.svg";
import { useState } from "react";
import SearchModal from "@/components/organisms/Modal/\bSearchModal";

const ContractEnroll = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  const handleOnClikSearchOpen = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <Container>
        <styles.TitleBox>
          <styles.Title>팝업 관리</styles.Title>
          <styles.SubTitle>
            학생들에게 보여줄 제휴 가게를 등록해보세요.
          </styles.SubTitle>
        </styles.TitleBox>
        <MainBox>
          <NumberBox>
            <NumberTitleBox>1. 가게 검색</NumberTitleBox>
            <SearchExpandBox onClick={handleOnClikSearchOpen}>
              <SearchInput>제휴하려는 가게를 찾아보세요!</SearchInput>
              <SearchIconBox>
                <SearchIcon alt="search icon" />
              </SearchIconBox>
            </SearchExpandBox>
          </NumberBox>
          <NumberBox>
            <NumberTitleBox>
              2. 가게 정보(가게명, 카테고리, 메뉴, 주소, 거리, 영업시간)
            </NumberTitleBox>
          </NumberBox>
          <NumberBox>
            <GrayInput placeholder="가게명" />
            <GrayInput style={{ marginLeft: "10px" }} placeholder="카테고리" />
          </NumberBox>
          <NumberBox style={{ width: "100%" }}>
            <GrayInput placeholder="메뉴" />
          </NumberBox>
          <NumberBox style={{ width: "100%" }}>
            <GrayInput placeholder="주소" />
          </NumberBox>
          <NumberBox>
            <GrayInput placeholder="영업 시간" />
            <GrayInput style={{ marginLeft: "10px" }} placeholder="거리" />
          </NumberBox>
          <NumberBox style={{ marginTop: "25px" }}>
            <NumberTitleBox>3. 제휴 혜택</NumberTitleBox>
          </NumberBox>
          <NumberBox>
            <ConditionBox>
              <ConditionInput placeholder="ex) 2500원 할인" />
              <ConditionIcon>
                <Checkbox
                  icon={<CircleIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              </ConditionIcon>
            </ConditionBox>
          </NumberBox>
          <NumberBox style={{ marginTop: "15px" }}>
            <NumberTitleBox>4. 계약 기간</NumberTitleBox>
          </NumberBox>
          <NumberBox>
            <ConditionBox>
              <ConditionInput placeholder="2023.11.25 ~ 2024.11.25" />
              <ConditionIcon>
                <Checkbox
                  icon={<CircleIcon />}
                  checkedIcon={<CheckCircleIcon />}
                />
              </ConditionIcon>
            </ConditionBox>
          </NumberBox>
        </MainBox>
      </Container>
      {isSearchOpen && <SearchModal setIsSearchOpen={setIsSearchOpen} />}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 919px;
`;

const MainBox = styled.div`
  margin: 0 auto;
  width: 485px;
`;

const NumberBox = styled.div`
  height: 42px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const NumberTitleBox = styled.div``;

const ConditionBox = styled.div`
  display: flex;
  border-radius: 6px;
  border: 1px solid var(--border, #e3e3e3);
  padding: 5px;
  align-items: center;
  width: 100%;
`;

const ConditionInput = styled.input`
  padding-left: 10px;
  display: flex;
  align-items: center;
  height: 30px;
  outline: none;
  border: none;
  color: #4a4a4a;
  font-family: Pretendard Variable;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  ::placeholder {
    color: #afafaf;
  }
`;

const ConditionIcon = styled.div`
  margin-left: auto;
`;

const GrayInput = styled.input`
  border-radius: 6px;
  background: #f7f7f7;
  color: #4a4a4a;
  font-size: 13.984px;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  height: 42px;
  padding-left: 10px;
  outline: none;
  border: none;
  ::placeholder {
    color: #afafaf;
  }
  width: 100%;
`;

const SearchExpandBox = styled.div`
  width: 305px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #f7f7f7;
  padding: 9px 8px;
  display: flex;
  margin-left: auto;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  background-color: transparent;
  border: none;
  margin-left: 8px;
  width: 100%;
  outline: none;

  color: #afafaf;
`;

const SearchIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

export default ContractEnroll;
