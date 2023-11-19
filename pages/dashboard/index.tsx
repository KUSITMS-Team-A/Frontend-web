import * as stylds from "@/components/styles/dashboard/style";
import Head from "next/head";
import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import useDateRange from "@/components/hooks/useDateRange";

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
      <stylds.Container>
        <stylds.TitleContainer>
          <stylds.Title>대시보드</stylds.Title>
          <stylds.IndexButton
            className={css`
              align-self: flex-end;
            `}
          >
            가게별 검색
          </stylds.IndexButton>
          <stylds.SubTitle>
            이번달 [{dateRange.startDate} -{dateRange.endDate}] 기준입니다.
          </stylds.SubTitle>
        </stylds.TitleContainer>

        <stylds.OptionContainer>
          <stylds.ButtonWrapper>
            <stylds.IndexButton>전체</stylds.IndexButton>
            <stylds.IndexButton>음식점</stylds.IndexButton>
            <stylds.IndexButton>카페</stylds.IndexButton>
            <stylds.IndexButton>미용</stylds.IndexButton>
            <stylds.IndexButton>문화</stylds.IndexButton>
            <stylds.IndexButton>기타</stylds.IndexButton>
          </stylds.ButtonWrapper>

          <stylds.ButtonWrapper>
            <stylds.IndexButton>최근 7일</stylds.IndexButton>
            <stylds.IndexButton>최근 14일</stylds.IndexButton>
            <stylds.IndexButton>이번 달</stylds.IndexButton>
            <stylds.IndexButton>지난 달</stylds.IndexButton>
            <stylds.IndexButton>올해</stylds.IndexButton>
          </stylds.ButtonWrapper>
        </stylds.OptionContainer>

        <stylds.ContentsContainer></stylds.ContentsContainer>
      </stylds.Container>
    </>
  );
};

export default DashBoardPage;
