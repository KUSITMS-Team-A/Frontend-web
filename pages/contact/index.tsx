import SearchInput from "@/components/SearchInput";
import Filter from "@/components/organisms/Filter";
import * as styles from "@/components/styles/Contact.styles";
import SearchIcon from "@/assets/svg/Search.svg";
import Image from "next/image";

export default function Contact() {
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
            <styles.StoreIconBox></styles.StoreIconBox>
            <styles.StoreTypeBox>음식점</styles.StoreTypeBox>
            <styles.DashBoardIcon></styles.DashBoardIcon>
          </styles.StoreTopBox>
          <styles.StoreNameBox>제대로 미용실</styles.StoreNameBox>
          <styles.BenefitBox>
            <styles.ConditionBox>주문시</styles.ConditionBox>
            <styles.PercentBox>30% 할인</styles.PercentBox>
          </styles.BenefitBox>
        </styles.StoreContainer>
      </styles.MainBox>
    </styles.Container>
  );
}
