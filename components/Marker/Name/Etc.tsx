import { Position } from "../Icon/Food";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import Etc from "@/assets/svg/Etc.svg";
import * as styles from "@/components/Marker/Name/Name.styles";

const EtcNameMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <styles.MarkerContainer type="Etc">
        <styles.MarkerIconBox>
          <Image src={Etc} alt="Etc marker" width={29} height={29} />
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>릴즈</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>기타</styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  );
};

export default EtcNameMarker;
