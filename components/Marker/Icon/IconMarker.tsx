import Food from "@/assets/svg/Food.svg";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";

interface NameMarkerProps {
  lat: number;
  lng: number;
  type: string;
  icon: string;
}

const IconMarker = ({ lat, lng, type, icon }: NameMarkerProps) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <Image src={icon} alt={`${type} marker`} width={30} height={30} />
    </CustomOverlayMap>
  );
};

export default IconMarker;
