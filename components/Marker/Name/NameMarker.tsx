import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import * as styles from "@/components/Marker/Name/Name.styles";

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
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <styles.MarkerContainer type={type}>
        <styles.MarkerIconBox>
          <Image src={icon} alt={`${title} marker`} width={29} height={29} />
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>{title}</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>{markerType}</styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  );
};

export default NameMarker;
