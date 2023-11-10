import * as styles from "@/components/styles/Search.styles";
import Image from "next/image";
import DownArrow from "@/assets/svg/DownArrow.svg";
import UpArrow from "@/assets/svg/UpArrow.svg";
import EmptyHeart from "@/assets/svg/EmptyHeart.svg";
import FullHeart from "@/assets/svg/FullHeart.svg";
import { useState } from "react";
import { SizeTypeImg } from "@/utils/TypeImg";
import StoreInfo from "./StoreInfo";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOnClickHeart = () => {
    setIsClick(!isClick);
  };

  const handleOnClickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <styles.ListTopBox>
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
        </styles.InfoContainerBox>
      </styles.ListTopBox>
      <styles.ListBottomBox>
        {isOpen ? <StoreInfo /> : ""}

        <styles.InfoContainerBox>
          <styles.DownBtnBox onClick={handleOnClickOpen}>
            {isOpen ? (
              <Image
                style={{ marginTop: "35px" }}
                src={UpArrow}
                alt="up arrow button"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src={DownArrow}
                alt="down arrow button"
                width={20}
                height={20}
              />
            )}
          </styles.DownBtnBox>
        </styles.InfoContainerBox>
      </styles.ListBottomBox>
    </>
  );
};

export default Storelist;
