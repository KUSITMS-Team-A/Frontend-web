import * as styles from "@/components/styles/dashboard/style";
import Head from "next/head";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import useDateRange from "@/components/hooks/useDateRange";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";

interface DashBoardProps {}
interface DateState {
  dates: dates;
}

enum dates {
  aWeek,
  twoWeek,
  month,
  year,
}
const DashBoardPage: React.FC = () => {
  const { dateRange, calculateDateRange } = useDateRange();

  const [dateFilter, setDateFilter] = useState<DateState>({
    dates: dates.aWeek,
  });

  useEffect(() => {
    calculateDateRange(1, "month");
  }, [dateFilter]);

  return (
    <>
      <Head>
        <title>제대로 대시보드</title>
        <meta name="dashboard" content="대시보드" />
      </Head>
      <styles.Container>
        <styles.TitleContainer>
          <styles.Title>대시보드</styles.Title>
          <styles.IndexButton
            className={css`
              align-self: flex-end;
            `}
          >
            가게별 검색
          </styles.IndexButton>
          <styles.SubTitle>
            이번달 [{dateRange.startDate} -{dateRange.endDate}] 기준입니다.
          </styles.SubTitle>
        </styles.TitleContainer>

        <styles.OptionContainer>
          <styles.ButtonWrapper>
            <styles.IndexButton>전체</styles.IndexButton>
            <styles.IndexButton>음식점</styles.IndexButton>
            <styles.IndexButton>카페</styles.IndexButton>
            <styles.IndexButton>미용</styles.IndexButton>
            <styles.IndexButton>문화</styles.IndexButton>
            <styles.IndexButton>기타</styles.IndexButton>
          </styles.ButtonWrapper>

          <styles.ButtonWrapper>
            <styles.IndexButton>최근 7일</styles.IndexButton>
            <styles.IndexButton>최근 14일</styles.IndexButton>
            <styles.IndexButton>이번 달</styles.IndexButton>
            <styles.IndexButton>지난 달</styles.IndexButton>
            <styles.IndexButton>올해</styles.IndexButton>
          </styles.ButtonWrapper>
        </styles.OptionContainer>

        <styles.ContentsContainer>
          <styles.FirstBox>
            <FirstBox />
          </styles.FirstBox>
          <styles.SecondBox>
            <SecondBox />
          </styles.SecondBox>
          <styles.ThirdBox>3</styles.ThirdBox>
          <styles.FourthBox>4</styles.FourthBox>
          <styles.FifthBox>5</styles.FifthBox>
        </styles.ContentsContainer>
      </styles.Container>
    </>
  );
};

export default DashBoardPage;
