import styled from "@emotion/styled";

export const Container = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: auto;

  width: 80vw;

  row-gap: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  width: 100%;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  row-gap: 10px;
`;

export const ContentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, minmax(1fr, auto));
  width: 100%;
  min-height: 50vh;

  column-gap: 10px;
  row-gap: 10px;
`;

//
export const Title = styled.p`
  color: var(--, #1c1c1e);
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -1.56px;
`;

export const IndexButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 6rem;

  border: 1px solid var(--g1, #c6c6c6);
  padding: 10px 15px;

  transition: all 0.5s ease;
  &:hover {
    background-color: var(--g1, #c6c6c680);
    transition: all 0.5s ease;
  }
`;

export const SubTitle = styled.div`
  color: #676767;
  font-family: Pretendard Variable;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 128.425% */
  letter-spacing: -0.9px;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  column-gap: 10px;
`;

export const DefaultBox = styled.article`
  display: flex;
`;

export const FirstBox = styled(DefaultBox)`
  grid-column: 1/3;
  grid-row: 1/2;

  width: 100%;
`;

export const SecondBox = styled(DefaultBox)`
  grid-column: 3/5;
  grid-row: 1/2;
`;

export const ThirdBox = styled(DefaultBox)`
  grid-column: 5/7;
  grid-row: 1/2;
`;

export const FourthBox = styled(DefaultBox)`
  grid-column: 1/4;
  grid-row: 2/3;
`;

export const FifthBox = styled(DefaultBox)`
  grid-column: 4/7;
  grid-row: 2/3;
`;
