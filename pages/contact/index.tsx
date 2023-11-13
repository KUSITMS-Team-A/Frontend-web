import SearchInput from "@/components/SearchInput";
import Filter from "@/components/organisms/Filter";
import * as styles from "@/components/styles/Contact.styles";
import SearchIcon from "@/assets/svg/Search.svg";
import Image from "next/image";
import { ReactNode } from "react";
import Food from "@/assets/svg/Food.svg";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import DashBoard from "@/assets/svg/SmallDashBoardIcon.svg";

export default function Contact() {
  const typeStyles: { [key: string]: { value: ReactNode } } = {
    음식점: {
      value: <Image src={Food} alt="food marker" width={24} height={24} />,
    },
    카페: {
      value: <Image src={Cafe} alt="cafe marker" width={24} height={24} />,
    },
    미용: {
      value: <Image src={Beauty} alt="Beauty marker" width={24} height={24} />,
    },
    문화: {
      value: (
        <Image src={Culture} alt="Culture marker" width={24} height={24} />
      ),
    },
    기타: {
      value: <Image src={Etc} alt="Etc marker" width={24} height={24} />,
    },
  };

  return (
    <styles.Container>
      <styles.TopBox>
        <styles.TopTitleBox>
          <styles.HeadTitleBox>제휴가게</styles.HeadTitleBox>
          <styles.SubTitleBox>
            1년 동안 제휴를 맺은 가게들이에요.
          </styles.SubTitleBox>
        </styles.TopTitleBox>
        <styles.BlackButtonBox>정산관리</styles.BlackButtonBox>
      </styles.TopBox>
      <styles.MiddleBox>
        <styles.FilterBox>
          <Filter AllCount={43} />
        </styles.FilterBox>
        <styles.SearchBox>
          <Image src={SearchIcon} alt="search icon" />
        </styles.SearchBox>
        <styles.ButtonBox>
          <styles.WhiteBtnBox>삭제하기</styles.WhiteBtnBox>
          <styles.WhiteBtnBox style={{ marginLeft: "7px" }}>
            등록하기
          </styles.WhiteBtnBox>
        </styles.ButtonBox>
      </styles.MiddleBox>
      <styles.MainBox>
        <styles.StoreContainer>
          <styles.StoreTopBox>
            <styles.StoreIconBox>
              {typeStyles["음식점"].value}
            </styles.StoreIconBox>
            <styles.StoreTypeBox>음식점</styles.StoreTypeBox>
            <styles.DashBoardIcon>
              <Image
                src={DashBoard}
                alt="dash board icon"
                width={24}
                height={24}
              />
            </styles.DashBoardIcon>
          </styles.StoreTopBox>
          <styles.StoreNameBox>제대로 미용실</styles.StoreNameBox>
          <styles.BenefitBox>
            <styles.ConditionBox>주문시</styles.ConditionBox>
            <styles.PercentBox>24% 할인</styles.PercentBox>
          </styles.BenefitBox>
        </styles.StoreContainer>
      </styles.MainBox>
    </styles.Container>
  );
}
