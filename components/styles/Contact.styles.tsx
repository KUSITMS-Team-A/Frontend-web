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
  width: 165px;
  height: 41.502px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  border-radius: 3.933px;
  border: 1.311px solid var(--g1, #c6c6c6);
  background: #505050;
  color: #dfff60;
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

export const RemoveBtn = styled.div`
  border-radius: 5px;
  border: 1px solid var(--g0, #f4f4f4);
  background: var(--White, #fff);
  display: flex;
  width: 90px;
  height: 33px;
  justify-content: center;
  align-items: center;
  color: var(--, #1c1c1e);
  font-size: 13.984px;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
`;

export const WhiteBtnBox = styled.div`
  display: flex;
  width: 90px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--g0, #f4f4f4);
  background: var(--g0, #f4f4f4);
  color: var(--, #1c1c1e);
  font-size: 13.984px;
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
  height: 179px;
  border-radius: 10px;
  padding: 17px;
  border-radius: 5px;
  background: #fafafb;
  backdrop-filter: blur(2px);
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
  margin-top: 30px;
  display: flex;
  color: var(--, #3d4149);
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.264px; /* 77.055% */
  letter-spacing: -1.5px;
`;

export const BenefitBox = styled.div`
  display: flex;
  margin-top: 13px;
`;

export const ConditionBox = styled.div`
  color: var(--, #3d4149);
  text-align: right;
  font-size: 15.6px;
  font-style: normal;
  font-weight: 400;
  line-height: 25.043px; /* 160.532% */
  letter-spacing: -0.936px;
`;

export const PercentBox = styled.div`
  margin-left: 7px;
  display: inline-flex;
  padding: 0px 3.9px;
  justify-content: center;
  align-items: center;
  gap: 13px;
  border-radius: 3.9px;
  background: var(--sub2, #0e6eff);
  color: var(--sub3, #dfff60);
  font-size: 15.6px;
  font-weight: 600;
  line-height: 25.043px; /* 160.532% */
  letter-spacing: -0.936px;
`;
