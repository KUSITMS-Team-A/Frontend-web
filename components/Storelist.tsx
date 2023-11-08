import * as styles from "@/components/styles/Search.styles";
import Image from "next/image";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Food from "@/assets/svg/Food.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import DownArrow from "@/assets/svg/DownArrow.svg";
import EmptyHeart from "@/assets/svg/EmptyHeart.svg";
import FullHeart from "@/assets/svg/FullHeart.svg";

import { ReactNode, useState } from "react";

interface SProps {
  type: "음식점" | "카페" | "문화" | "미용" | "기타";
  title: string;
  description: string;
  place: string;
  distance: number;
}

const typeStyles: { [key: string]: { value: ReactNode } } = {
  음식점: {
    value: <Image src={Food} alt="food marker" width={68} height={68} />,
  },
  카페: {
    value: <Image src={Cafe} alt="cafe marker" width={68} height={68} />,
  },
  미용: {
    value: <Image src={Beauty} alt="Beauty marker" width={68} height={68} />,
  },
  문화: {
    value: <Image src={Culture} alt="Culture marker" width={68} height={68} />,
  },
  기타: {
    value: <Image src={Etc} alt="Etc marker" width={68} height={68} />,
  },
};

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
