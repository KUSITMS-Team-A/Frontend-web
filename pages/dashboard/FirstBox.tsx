import { ReactNode } from "react";
import * as styles from "./FirstBox.styles";
import { css } from "@emotion/css";

interface FirstBoxProps {
  children?: ReactNode;
}

const FirstBox: React.FC<FirstBoxProps> = () => {
  return (
    <styles.Container>
      <styles.UpperContainer>
        <styles.UpperBox>
          <styles.Title>제휴가게 방문자 수 상위 Top N (누적)</styles.Title>
        </styles.UpperBox>
        <styles.LowerBox>
          <styles.ChartContents>
            <styles.ChartTitle>
              <styles.TitleNumber>1</styles.TitleNumber>탕화쿵푸
            </styles.ChartTitle>
            <styles.ChartBar
              className={css`
                height: 100px;
              `}
            />
          </styles.ChartContents>
          <styles.ChartContents>
            <styles.ChartTitle>
              <styles.TitleNumber>2</styles.TitleNumber>탕화쿵푸
            </styles.ChartTitle>
            <styles.ChartBar
              className={css`
                height: 60px;
              `}
            />
          </styles.ChartContents>
          <styles.ChartContents>
            <styles.ChartTitle>
              <styles.TitleNumber>3</styles.TitleNumber>탕화쿵푸
            </styles.ChartTitle>
            <styles.ChartBar
              className={css`
                height: 30px;
              `}
            />
          </styles.ChartContents>
        </styles.LowerBox>
      </styles.UpperContainer>
      <styles.LowerContainer>
        <styles.UpperBox>
          <styles.Title>제휴가게 방문자 수 상위 Top N (누적)</styles.Title>
        </styles.UpperBox>

        <styles.LowerBox>
          <styles.ChartContents>
            <styles.ChartTitle>
              <styles.TitleNumber>1</styles.TitleNumber>탕화쿵푸
            </styles.ChartTitle>
            <styles.ChartBar
              className={css`
                height: 100px;
              `}
            />
          </styles.ChartContents>
          <styles.ChartContents>
            <styles.ChartTitle>
              <styles.TitleNumber>2</styles.TitleNumber>탕화쿵푸
            </styles.ChartTitle>
            <styles.ChartBar
              className={css`
                height: 60px;
              `}
            />
          </styles.ChartContents>
          <styles.ChartContents>
            <styles.ChartTitle>
              <styles.TitleNumber>3</styles.TitleNumber>탕화쿵푸
            </styles.ChartTitle>
            <styles.ChartBar
              className={css`
                height: 30px;
              `}
            />
          </styles.ChartContents>
        </styles.LowerBox>
      </styles.LowerContainer>
    </styles.Container>
  );
};

export default FirstBox;
