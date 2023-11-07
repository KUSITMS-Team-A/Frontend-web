import Beauty from "@/assets/svg/Beauty.svg";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import { Position } from "./Food";

const BeautyMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <Image src={Beauty} alt="Beauty marker" width={30} height={30} />
    </CustomOverlayMap>
  );
};

export default BeautyMarker;
