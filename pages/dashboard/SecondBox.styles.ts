import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
`;

export const ChartBox = styled.div`
  width: 100%;
  height: 90%;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20.86px; /* 139.066% */
  letter-spacing: -0.9px;
`;
