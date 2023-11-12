import KakaoMap from "@/components/Map";
import Storelist from "@/components/Storelist";
import * as styles from "@/components/styles/Search.styles";
import Image from "next/image";
import FullHeart from "@/assets/svg/FullHeart.svg";
import { useState } from "react";
import Filter from "@/components/organisms/Filter";
import SearchInput from "@/components/SearchInput";
import NameMarker from "@/components/Marker/Name/NameMarker";
import Food from "@/assets/svg/Food.svg";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import { useRecoilState } from "recoil";
import { NewClickStore } from "@/states/Store";
import IconMarker from "@/components/Marker/Icon/IconMarker";

export default function SearchHome() {
  const [isSearch, setIsSearch] = useState(false);
  const [clickStore, setClickStore] = useRecoilState(NewClickStore);
  const eng = ["Food", "Cafe", "Culture", "Beauty", "Etc"];

  const typeEngtoKor = (name: string) => {
    const kor = ["음식점", "카페", "문화", "미용", "기타"];
    return kor[eng.indexOf(name)];
  };

  const returnSVG = (name: string) => {
    const arr = [Food, Cafe, Culture, Beauty, Etc];
    return arr[eng.indexOf(name)];
  };

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
          <KakaoMap latitude={37.5407625} longitude={127.0740428}>
            {clickStore.isClick ? (
              <NameMarker
                lat={clickStore.lat}
                lng={clickStore.lng}
                type={clickStore.type}
                icon={returnSVG(typeEngtoKor(clickStore.type))}
                title={clickStore.name}
                markerType={clickStore.type}
              />
            ) : (
              <>
                <IconMarker
                  lat={37.5407625}
                  lng={127.0790428}
                  type="Food"
                  icon={Food}
                />
                <IconMarker
                  lat={37.5380625}
                  lng={127.0700328}
                  type="Beauty"
                  icon={Beauty}
                />
                <IconMarker
                  lat={37.5437625}
                  lng={127.0740428}
                  type="Cafe"
                  icon={Cafe}
                />
                <IconMarker
                  lat={37.5407625}
                  lng={127.0720428}
                  type="Etc"
                  icon={Etc}
                />
                <IconMarker
                  lat={37.5407625}
                  lng={127.0670428}
                  type="Culture"
                  icon={Culture}
                />
                <NameMarker
                  lat={37.5437625}
                  lng={127.0670428}
                  type="Food"
                  icon={Food}
                  title="릴즈"
                  markerType="음식"
                />
              </>
            )}
          </KakaoMap>
        </styles.MapBox>
        <styles.ListsBox>
          <Storelist
            title="릴즈"
            type="음식점"
            description="아메리칸"
            place="서울특별시"
            distance={176}
            lat={37.5407625}
            lng={127.0790428}
          />
          <Storelist
            title="566"
            type="음식점"
            description="아메리칸"
            place="서울특별시"
            distance={176}
            lat={37.5380625}
            lng={127.0700328}
          />
          <Storelist
            title="rfhf"
            type="카페"
            description="아메리칸"
            place="서울특별시"
            distance={176}
            lat={37.5380625}
            lng={127.0700328}
          />
        </styles.ListsBox>
      </styles.MainBox>
    </styles.Container>
  );
}
