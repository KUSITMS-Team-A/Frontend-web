import Cafe from "@/assets/svg/Cafe.svg";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import { Position } from "./Food";

const CafeMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <Image src={Cafe} alt="cafe marker" width={30} height={30} />
    </CustomOverlayMap>
  );
};

export default CafeMarker;
