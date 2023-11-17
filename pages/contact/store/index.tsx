import KakaoMap from "@/components/Map";
import GrayButton from "@/components/organisms/GrayButton";
import * as styled from "@/components/styles/ContactStore.styles";
import { COLORS } from "@/styles/colors";
import { SizeTypeImg } from "@/utils/TypeImg";
import React, { useState } from "react";
import Benefit from "@/assets/svg/info/Benefit.svg";
import Call from "@/assets/svg/info/Call.svg";
import link from "@/assets/svg/info/Link.svg";
import place from "@/assets/svg/info/place.svg";
import profile from "@/assets/svg/info/Profile.svg";
import NextBtn from "@/assets/svg/NextBtn.svg";
import Image from "next/image";
import NameMarker from "@/components/Marker/Name/NameMarker";
import Food from "@/assets/svg/Food.svg";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import StampModal from "@/components/organisms/Modal/StampModal";

const ContactStore = () => {
  const [isStampModal, setIsStampModal] = useState<boolean>(false);

  const handleOnClickStamp = () => {
    setIsStampModal(!isStampModal);
  };

  const typeStyles = SizeTypeImg(68);

  return (
    <>
      <styled.Container>
        <styled.HeadTitleBox>제휴 가게</styled.HeadTitleBox>
        <styled.ButtonsBox>
          <GrayButton
            label="2023.01.03 - 2023.12.21"
            width={216}
            color="black"
          />
          <div style={{ marginLeft: "101px" }}>
            <GrayButton
              label="제휴 종료"
              width={111}
              color={`${COLORS.blue}`}
            />
          </div>
          <div style={{ marginLeft: "auto" }}>
            <GrayButton
              onClick={handleOnClickStamp}
              label="2배 스탬프 적용"
              width={111}
              color="#636366"
            />
          </div>
        </styled.ButtonsBox>
        <styled.MainBox>
          <styled.MapBox>
            <KakaoMap latitude={37.5407625} longitude={127.0740428}>
              <NameMarker
                lat={37.5407625}
                lng={127.0740428}
                type="음식점"
                icon={Food}
                title="릴즈"
                markerType="음식점"
              />
            </KakaoMap>
          </styled.MapBox>
          <styled.InfoBox>
            <styled.TopBox>
              <styled.TopIconBox>
                {typeStyles["음식점"].value}
              </styled.TopIconBox>
              <styled.TopTitleBox>릴즈</styled.TopTitleBox>
              <styled.TopTypeBox>음식점</styled.TopTypeBox>
            </styled.TopBox>
            <styled.StoreInfoContainer>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Image src={place} alt="place icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>서울특별시</styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Image
                    src={Benefit}
                    alt="Benefit icon"
                    width={22}
                    height={22}
                  />
                </styled.SmallIconBox>
                <styled.TextBox>
                  주문시
                  <styled.PercentBox>15% 할인</styled.PercentBox>
                </styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Image src={Call} alt="Call icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>서울특별시</styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Image
                    src={profile}
                    alt="profile icon"
                    width={22}
                    height={22}
                  />
                </styled.SmallIconBox>
                <styled.TextBox>서울특별시</styled.TextBox>
              </styled.StoreInfoBox>
              <styled.StoreInfoBox>
                <styled.SmallIconBox>
                  <Image src={link} alt="link icon" width={22} height={22} />
                </styled.SmallIconBox>
                <styled.TextBox>서울특별시</styled.TextBox>
              </styled.StoreInfoBox>
            </styled.StoreInfoContainer>
            <styled.DashBoardsBox>
              <styled.DashTopBox>
                <styled.DashTitleBox>대시보드</styled.DashTitleBox>
                <styled.NextBox>
                  <Image
                    src={NextBtn}
                    alt="next button"
                    width={24}
                    height={24}
                  />
                </styled.NextBox>
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
          </styled.InfoBox>
        </styled.MainBox>
      </styled.Container>
      {isStampModal ? <StampModal setIsStampModal={setIsStampModal} /> : ""}
    </>
  );
};

export default ContactStore;
