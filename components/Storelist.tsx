import * as styles from "@/components/styles/Search.styles";
import Image from "next/image";
import DownArrow from "@/assets/svg/DownArrow.svg";
import EmptyHeart from "@/assets/svg/EmptyHeart.svg";
import FullHeart from "@/assets/svg/FullHeart.svg";
import { useState } from "react";
import { SizeTypeImg } from "@/utils/TypeImg";

interface SProps {
  type: "음식점" | "카페" | "문화" | "미용" | "기타";
  title: string;
  description: string;
  place: string;
  distance: number;
}

const typeStyles = SizeTypeImg(68);

const Storelist = ({ type, title, place, distance, description }: SProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const handleOnClickHeart = () => {
    setIsClick(!isClick);
  };
  return (
    <styles.ListBox>
      <styles.TypeImgBox>{typeStyles[type].value}</styles.TypeImgBox>
      <styles.InfoContainerBox>
        <styles.InfoTopBox>
          <styles.NameBox>{title}</styles.NameBox>
          <styles.StoreTypeBox>{type}</styles.StoreTypeBox>
          {/** TODO: warning 여부에 따라 보이도록
           * <styles.WarningBox></styles.WarningBox>
           */}
          <styles.StoreHeartBox onClick={handleOnClickHeart}>
            {isClick ? (
              <Image src={FullHeart} alt="FullHeart" />
            ) : (
              <Image src={EmptyHeart} alt="emptyHeart" />
            )}
          </styles.StoreHeartBox>
        </styles.InfoTopBox>
        <styles.StoreInfoBox>{description}</styles.StoreInfoBox>
        <styles.StoreBottomBox>
          <styles.StoreLocationBox>{place}</styles.StoreLocationBox>
          <styles.StoreDistanceBox>{distance}m</styles.StoreDistanceBox>
        </styles.StoreBottomBox>
        <styles.DownBtnBox>
          <Image
            src={DownArrow}
            alt="down arrow button"
            width={20}
            height={20}
          />
        </styles.DownBtnBox>
      </styles.InfoContainerBox>
    </styles.ListBox>
  );
};

export default Storelist;
