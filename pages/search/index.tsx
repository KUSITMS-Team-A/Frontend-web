import KakaoMap from "@/components/Map";
import BeautyMarker from "@/components/Marker/Icon/Beauty";
import CafeMarker from "@/components/Marker/Icon/Cafe";
import CultureMarker from "@/components/Marker/Icon/Culture";
import EtcMarker from "@/components/Marker/Icon/Etc";
import FoodMarker from "@/components/Marker/Icon/Food";
import CultureNameMarker from "@/components/Marker/Name/Culture";
import FoodNameMarker from "@/components/Marker/Name/Food";
import Storelist from "@/components/Storelist";
import * as styles from "@/components/styles/Search.styles";
import Image from "next/image";
import SearchIcon from "@/assets/svg/Search.svg";
import EmptyHeart from "@/assets/svg/EmptyHeart.svg";
import { ReactNode, useState } from "react";
import { SizeTypeImg } from "@/utils/TypeImg";
import uCafe from "@/assets/svg/unselect/uCafe.svg";
import uCulture from "@/assets/svg/unselect/uCulture.svg";
import uEtc from "@/assets/svg/unselect/uEtc.svg";
import uFood from "@/assets/svg/unselect/uFood.svg";
import uBeauty from "@/assets/svg/unselect/uBeauty.svg";

export default function SearchHome() {
  const [isSearch, setIsSearch] = useState(false);
  const [isAll, setIsAll] = useState(true);
  const [filterState, setFilterState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleOnClickAll = () => {
    setIsAll(!isAll);
    setFilterState([false, false, false, false, false]);
  };

  const handleOnClickFilter = (idx: number) => {
    setIsAll(false);
    setFilterState((prevState) =>
      prevState.map((value, index) => (index === idx ? true : false))
    );
  };

  const filterName: ("음식점" | "카페" | "미용" | "문화" | "기타")[] = [
    "음식점",
    "카페",
    "미용",
    "문화",
    "기타",
  ];

  const handleOnClickSearch = () => {
    setIsSearch(!isSearch);
  };

  const typeStyles: { [key: string]: { value: ReactNode } } = {
    음식점: {
      value: <Image src={uFood} alt="food marker" width={30} height={30} />,
    },
    카페: {
      value: <Image src={uCafe} alt="cafe marker" width={30} height={30} />,
    },
    미용: {
      value: <Image src={uBeauty} alt="Beauty marker" width={30} height={30} />,
    },
    문화: {
      value: (
        <Image src={uCulture} alt="Culture marker" width={30} height={30} />
      ),
    },
    기타: {
      value: <Image src={uEtc} alt="Etc marker" width={30} height={30} />,
    },
  };

  return (
    <styles.Container>
      <styles.TitleBox>가게 찾기</styles.TitleBox>
      <styles.MiddleBox>
        <styles.FiltersBox>
          <styles.FilterAllText type={isAll} onClick={handleOnClickAll}>
            전체
          </styles.FilterAllText>
          {filterName.map((el, idx) => {
            return (
              <styles.FilterComponentBox
                onClick={() => handleOnClickFilter(idx)}
              >
                <styles.FilterIconBox>
                  {filterState[idx]
                    ? SizeTypeImg(30)[el].value
                    : typeStyles[el].value}
                </styles.FilterIconBox>
                <styles.FilterText type={filterState[idx]}>
                  {el}
                </styles.FilterText>
              </styles.FilterComponentBox>
            );
          })}
        </styles.FiltersBox>
        {/** TODO: 누르면 expand로 변경되도록 */}
        <styles.FilterEndBox>
          {isSearch ? (
            <styles.SearchExpandBox>
              <styles.SearchInput placeholder="제휴하려는 가게를 찾아보세요!" />
              <styles.SearchIconBox>
                <Image src={SearchIcon} alt="search icon" />
              </styles.SearchIconBox>
            </styles.SearchExpandBox>
          ) : (
            <styles.SearchBox onClick={handleOnClickSearch}>
              <Image src={SearchIcon} alt="search icon" />
            </styles.SearchBox>
          )}
          <styles.HeartBox>
            <styles.HeartIconBox>
              <Image src={EmptyHeart} alt="emptyHeart" />
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
                <FoodNameMarker lat={37.5437625} lng={127.0670428} />
                <CultureNameMarker lat={37.5438625} lng={127.0640428} />
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
        </styles.ListsBox>
      </styles.MainBox>
    </styles.Container>
  );
}
