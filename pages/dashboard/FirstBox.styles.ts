import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const UpperContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(auto, 1fr));

  width: 100%;
  height: 50%;
`;

export const LowerContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, minmax(auto, 1fr));

  width: 100%;
  height: 50%;
`;

export const UpperBox = styled.div`
  grid-column: 1/4;
  grid-row: 1/2;
  height: 50%;

  margin: 0px auto;
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

export const LowerBox = styled.div`
  grid-column: 1/4;
  grid-row: 2/5;

  width: 80%;
  height: 80%;

  margin: 0px auto;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  column-gap: 10px;
`;

export const Title = styled.p`
  color: #676767;
  font-family: Pretendard Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 128.425% */
  letter-spacing: -0.9px;
`;

export const ChartColumnTitle = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const ChartBar = styled.div`
  width: 76.563px;
  height: 26.484px;
  border-radius: 8px 8px 0px 0px;
  background: black;
`;

export const ChartTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;

  align-items: center;
  column-gap: 3px;
`;

export const ChartContents = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: flex-end;
`;

export const TitleNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;
  width: 20px;
  height: 20px;
  padding: 2px;

  background-color: #2c5aff;
  color: white;
`;
