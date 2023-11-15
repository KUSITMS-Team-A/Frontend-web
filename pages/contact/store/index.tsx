import KakaoMap from "@/components/Map";
import GrayButton from "@/components/organisms/GrayButton";
import * as styled from "@/components/styles/ContactStore.styles";
import { COLORS } from "@/styles/colors";
import React from "react";

const ContactStore = () => {
  return (
    <styled.Container>
      <styled.HeadTitleBox>제휴 가게</styled.HeadTitleBox>
      <styled.ButtonsBox>
        <GrayButton label="2023.01.03 - 2023.12.21" width={216} color="black" />
        <GrayButton label="제휴 종료" width={111} color={`${COLORS.blue}`} />
        <GrayButton label="2배 스탬프 적용" width={111} color="#636366" />
      </styled.ButtonsBox>
      <styled.MainBox>
        <styled.MapBox>
          <KakaoMap latitude={37.5407625} longitude={127.0740428}></KakaoMap>
        </styled.MapBox>
        <styled.InfoBox>
          <styled.TopBox>
            <styled.TopIconBox></styled.TopIconBox>
            <styled.TopTitleBox>릴즈</styled.TopTitleBox>
            <styled.TopTypeBox>음식점</styled.TopTypeBox>
          </styled.TopBox>
          <styled.StoreInfoContainer>
            <styled.StoreInfoBox>
              <styled.SmallIconBox></styled.SmallIconBox>
              <styled.TextBox></styled.TextBox>
            </styled.StoreInfoBox>
          </styled.StoreInfoContainer>
        </styled.InfoBox>
        <styled.DashBoardsBox>
          <styled.DashTopBox>
            <styled.DashTitleBox></styled.DashTitleBox>
            <styled.NextBox></styled.NextBox>
          </styled.DashTopBox>
          <styled.DashContainer>
            <styled.DashBoardBox>
              <styled.DashTxt>일 방문 수</styled.DashTxt>
              <styled.DashCount>21</styled.DashCount>
            </styled.DashBoardBox>
            <styled.DashBoardBox>
              <styled.DashTxt>누적 혜택</styled.DashTxt>
              <styled.DashCount>143,000</styled.DashCount>
            </styled.DashBoardBox>
            <styled.DashBoardBox>
              <styled.DashTxt>목표 달성률</styled.DashTxt>
              <styled.DashCount>46%</styled.DashCount>
            </styled.DashBoardBox>
          </styled.DashContainer>
        </styled.DashBoardsBox>
      </styled.MainBox>
    </styled.Container>
  );
};

export default ContactStore;
