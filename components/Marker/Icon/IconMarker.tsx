import Food from "@/assets/svg/Food.svg";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import { SizeTypeImg25 } from "@/utils/TypeImg";

interface NameMarkerProps {
  lat: number;
  lng: number;
  type: "Food" | "Cafe" | "Culture" | "Beauty" | "Etc";
  icon: string;
}

type TypeIcon = {
  [key: string]: {
    value: JSX.Element;
  };
};

const typeIcon: TypeIcon = SizeTypeImg25();

const eng = ["Food", "Cafe", "Culture", "Beauty", "Etc"];

const typeEngtoKor = (name: string) => {
  const kor = ["음식점", "카페", "문화", "미용", "기타"];
  return kor[eng.indexOf(name)];
};

const IconMarker = ({ lat, lng, type, icon }: NameMarkerProps) => {
  const typeName = typeEngtoKor(type);
  const iconElement = typeIcon[typeName]?.value || null;

  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      {iconElement}
    </CustomOverlayMap>
  );
};
export default IconMarker;
