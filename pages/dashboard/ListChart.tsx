import React from "react";
import styled from "@emotion/styled";
import * as containerStyle from "../../components/styles/SecondBox.styles";
import { css } from "@emotion/css";
import { NumberBall } from "@/components/atoms/basics";

interface ListProps {
  title: string;
  contents: Array<string>;
}

const ListChart: React.FC<ListProps> = ({ title, contents }) => {
  return (
    <containerStyle.Container>
      <containerStyle.TitleBox>
        <containerStyle.Title
          className={css`
            margin-top: 25px;
            margin-bottom: 15px;
          `}
        >
          {title}
        </containerStyle.Title>
      </containerStyle.TitleBox>
      <containerStyle.ChartBox>
        <ContentsBox>
          <div
            className={css`
              display: flex;
              flex-flow: column nowrap;
              row-gap: 10px;
            `}
          >
            {contents &&
              contents.map((element, index) => {
                return (
                  <div
                    className={css`
                      display: flex;
                      align-items: center;
                      justify-content: flex-start;
                      column-gap: 10px;
                    `}
                    key={index}
                  >
                    <NumberBall>{index + 1}</NumberBall>
                    <RankTitle>{element}</RankTitle>
                  </div>
                );
              })}
          </div>
        </ContentsBox>
      </containerStyle.ChartBox>
    </containerStyle.Container>
  );
};

export default ListChart;

const ContentsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  row-gap: 10px;
`;

const RankTitle = styled.p`
  font-weight: 500;
`;
