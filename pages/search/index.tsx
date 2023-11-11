import KakaoMap from "@/components/Map";
import BeautyMarker from "@/components/Marker/Icon/Beauty";
import CafeMarker from "@/components/Marker/Icon/Cafe";
import CultureMarker from "@/components/Marker/Icon/Culture";
import EtcMarker from "@/components/Marker/Icon/Etc";
import FoodMarker from "@/components/Marker/Icon/Food";
import Storelist from "@/components/Storelist";
import * as styles from "@/components/styles/Search.styles";
import Image from "next/image";
import FullHeart from "@/assets/svg/FullHeart.svg";
import { useState } from "react";
import Filter from "@/components/organisms/Filter";
import SearchInput from "@/components/SearchInput";
import NameMarker from "@/components/Marker/Name/NameMarker";
import Food from "@/assets/svg/Food.svg";

export default function SearchHome() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <styles.Container>
      <styles.TitleBox>가게 찾기</styles.TitleBox>
      <styles.MiddleBox>
        <Filter />
        {/** TODO: 누르면 expand로 변경되도록 */}
        <styles.FilterEndBox>
          <SearchInput isSearch={isSearch} setIsSearch={setIsSearch} />
          <styles.HeartBox>
            <styles.HeartIconBox>
              <Image src={FullHeart} alt="FullHeart" />
            </styles.HeartIconBox>
            <styles.HeartTextBox>픽한 업체</styles.HeartTextBox>
          </styles.HeartBox>
        </styles.FilterEndBox>
      </styles.MiddleBox>
      <styles.MainBox>
        <styles.MapBox>
          {/** 건국대학교 위치로 설정 (TODO: 추후에 변경 필요) */}
          <KakaoMap
            latitude={37.5407625}
            longitude={127.0740428}
            children={
              <>
                <FoodMarker lat={37.5407625} lng={127.0790428} />
                <CafeMarker lat={37.5380625} lng={127.0700328} />
                <BeautyMarker lat={37.5437625} lng={127.0740428} />
                <CultureMarker lat={37.5407625} lng={127.0720428} />
                <EtcMarker lat={37.5407625} lng={127.0670428} />
                <NameMarker
                  lat={37.5437625}
                  lng={127.0670428}
                  type="Food"
                  icon={Food}
                  title="릴즈"
                  markerType="음식"
                />
              </>
            }
          />
        </styles.MapBox>
        <styles.ListsBox>
          <Storelist
            title="릴즈"
            type="음식점"
            description="아메리칸"
            place="서울특별시"
            distance={176}
          />
          <Storelist
            title="릴즈"
            type="카페"
            description="아메리칸"
            place="서울특별시"
            distance={176}
          />
          <Storelist
            title="릴즈"
            type="문화"
            description="아메리칸"
            place="서울특별시"
            distance={176}
          />
          <Storelist
            title="릴즈"
            type="기타"
            description="아메리칸"
            place="서울특별시"
            distance={176}
          />
        </styles.ListsBox>
      </styles.MainBox>
    </styles.Container>
  );
}
