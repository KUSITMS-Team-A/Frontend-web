import Culture from "@/assets/svg/Culture.svg";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import { Position } from "./Food";

const CultureMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <Image src={Culture} alt="Culture marker" width={30} height={30} />
    </CustomOverlayMap>
  );
};

export default CultureMarker;
