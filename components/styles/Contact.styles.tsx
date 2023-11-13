import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 920px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const TopBox = styled.div`
  display: flex;
`;

export const TopTitleBox = styled.div``;

export const HeadTitleBox = styled.div`
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.53px; /* 63.577% */
  letter-spacing: -1.56px;
`;

export const SubTitleBox = styled.div`
  margin-top: 12px;
  color: var(--, #1c1c1e);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 128.425% */
  letter-spacing: -0.9px;
`;

export const BlackButtonBox = styled.div`
  display: flex;
  width: 118px;
  height: 41.502px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 3.933px;
  border: 1.311px solid var(--g1, #c6c6c6);
  background: #505050;
  color: #fff;
  font-size: 18.335px;
  font-weight: 400;
  letter-spacing: -1.1px;
`;

export const MiddleBox = styled.div`
  margin-top: 23px;
  display: flex;
  align-items: center;
`;

export const FilterBox = styled.div``;

export const SearchBox = styled.div`
  margin-left: auto;
  display: flex;
  width: 42px;
  height: 42px;
  padding: 9px 8px;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
  background: #f7f7f7;
  margin-right: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const WhiteBtnBox = styled.div`
  display: flex;
  width: 90px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid var(--g1, #c6c6c6);
  color: var(--, #1c1c1e);
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
`;

export const MainBox = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 18px 18px;
`;

export const StoreContainer = styled.div`
  width: 216px;
  height: 216px;
  border-radius: 10px;
  background: var(--g0, #f4f4f4);
  backdrop-filter: blur(2px);
  padding: 17px;
`;

export const StoreTopBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreIconBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StoreTypeBox = styled.div`
  color: var(--g2, #aeaeb2);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 120.399% */
  letter-spacing: -0.96px;

  margin-left: 6px;
`;

export const DashBoardIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const StoreNameBox = styled.div`
  margin-top: 41px;
  display: flex;
  justify-content: center;
`;

export const BenefitBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 13px;
`;

export const ConditionBox = styled.div``;

export const PercentBox = styled.div``;
