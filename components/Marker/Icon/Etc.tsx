import Etc from "@/assets/svg/Etc.svg";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import { Position } from "./Food";

const EtcMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <Image src={Etc} alt="Etc marker" width={30} height={30} />
    </CustomOverlayMap>
  );
};

export default EtcMarker;
