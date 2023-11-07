import { Position } from "../Icon/Food";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import Culture from "@/assets/svg/Culture.svg";
import * as styles from "@/components/Marker/Name/Name.styles";

const CultureNameMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <styles.MarkerContainer type="Culture">
        <styles.MarkerIconBox>
          <Image src={Culture} alt="Culture marker" width={29} height={29} />
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>릴즈</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>문화</styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  );
};

export default CultureNameMarker;
