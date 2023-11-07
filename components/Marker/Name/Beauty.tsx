import { Position } from "../Icon/Food";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import Beauty from "@/assets/svg/Beauty.svg";
import * as styles from "@/components/Marker/Name/Name.styles";

const BeautyNameMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <styles.MarkerContainer type="Beauty">
        <styles.MarkerIconBox>
          <Image src={Beauty} alt="Beauty marker" width={29} height={29} />
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>릴즈</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>미용</styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  );
};

export default BeautyNameMarker;
