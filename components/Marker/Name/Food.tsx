import { Position } from "../Icon/Food";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import Image from "next/image";
import Food from "@/assets/svg/Food.svg";
import * as styles from "@/components/Marker/Name/Name.styles";

const FoodNameMarker = ({ lat, lng }: Position) => {
  return (
    <CustomOverlayMap position={{ lat: lat, lng: lng }}>
      <styles.MarkerContainer type="Food">
        <styles.MarkerIconBox>
          <Image src={Food} alt="food marker" width={29} height={29} />
        </styles.MarkerIconBox>
        <styles.MarkerInfoBox>
          <styles.MarkerTitleBox>릴즈</styles.MarkerTitleBox>
          <styles.MarkerTypeBox>음식점</styles.MarkerTypeBox>
        </styles.MarkerInfoBox>
      </styles.MarkerContainer>
    </CustomOverlayMap>
  );
};

export default FoodNameMarker;
