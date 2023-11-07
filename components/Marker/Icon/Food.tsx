import Food from "@/assets/svg/Food.svg";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";

export interface Position {
  lat: number;
  lng: number;
}

const FoodMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <Image src={Food} alt="food marker" width={30} height={30} />
    </CustomOverlayMap>
  );
};

export default FoodMarker;
