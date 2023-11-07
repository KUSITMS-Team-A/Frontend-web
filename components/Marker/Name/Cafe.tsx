import { Position } from "../Icon/Food";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import Cafe from "@/assets/svg/Cafe.svg";
import * as styles from "@/components/Marker/Name/Name.styles";

const CafeNameMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <styles.MarkerContainer type="Cafe">
        <styles.MarkerIconBox>
          <Image src={Cafe} alt="Cafe marker" width={29} height={29} />
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>릴즈</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>카페</styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  );
};

export default CafeNameMarker;
