import styled from "@emotion/styled";
import * as styles from "@/components/styles/popup/style";
import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

const ContractEnroll = () => {
  return (
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
        </NumberBox>
        <NumberBox>
          <NumberTitleBox>
            2. 가게 정보(가게명, 카테고리, 메뉴, 주소, 거리, 영업시간)
          </NumberTitleBox>
        </NumberBox>
        <NumberBox>
          <GrayInput placeholder="가게명" />
          <GrayInput placeholder="카테고리" />
        </NumberBox>
        <NumberBox>
          <GrayInput placeholder="메뉴" />
        </NumberBox>
        <NumberBox>
          <GrayInput placeholder="주소" />
        </NumberBox>
        <NumberBox>
          <GrayInput placeholder="영업 시간" />
          <GrayInput placeholder="거리" />
        </NumberBox>
        <NumberBox>
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
        <NumberBox>
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
`;

const NumberBox = styled.div``;

const NumberTitleBox = styled.div``;

const ConditionBox = styled.div`
  display: flex;
`;

const ConditionInput = styled.input``;

const ConditionIcon = styled.div``;

const GrayInput = styled.input``;

export default ContractEnroll;
