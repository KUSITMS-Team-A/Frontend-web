import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import * as styles from "@/components/Marker/Name/Name.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { NewClickStore } from "@/states/Store";
import { useEffect, useState } from "react";
import Food from "@/assets/svg/Food.svg";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Beauty from "@/assets/svg/Beauty.svg";

interface NameMarkerProps {
  lat: number;
  lng: number;
  type: string;
  icon: string;
  title: string;
  markerType: string;
}

const NameMarker = ({
  lat,
  lng,
  type,
  icon,
  title,
  markerType,
}: NameMarkerProps) => {
  const clickStore = useRecoilValue(NewClickStore);
  const [openType, setOpenType] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const updateAfterDelay = () => {
    setTimeout(() => {
      setTime(1);
    }, 500); // 500 milliseconds (0.5 seconds) delay
  };
  const eng = ["Food", "Cafe", "Culture", "Beauty", "Etc"];

  const typeEngtoKor = (name: string) => {
    const kor = ["음식점", "카페", "문화", "미용", "기타"];
    return kor[eng.indexOf(name)];
  };

  const returnSVG = (name: string) => {
    const arr = [Food, Cafe, Culture, Beauty, Etc];
    return arr[eng.indexOf(name)];
  };
  useEffect(() => {
    updateAfterDelay();
    setOpenType(typeEngtoKor(clickStore.type));
    console.log("recoil", clickStore);
    console.log(clickStore.type);
  }, [clickStore.name]);

  return clickStore.type !== "" ? (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <styles.MarkerContainer type={typeEngtoKor(type)}>
        <styles.MarkerIconBox>
          <Image src={icon} alt={`${title} marker`} width={29} height={29} />
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>{title}</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>{markerType}</styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  ) : null;
};

export default NameMarker;
