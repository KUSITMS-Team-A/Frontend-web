import SearchInput from "@/components/SearchInput";
import Filter from "@/components/organisms/Filter";
import * as styles from "@/components/styles/Contact.styles";
import SearchIcon from "@/assets/svg/Search.svg";
import { SizeTypeImg25, SizeTypeImg49 } from "@/utils/TypeImg";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Food from "@/assets/svg/Food.svg";
import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import DashBoard from "@/assets/svg/SmallDashBoardIcon.svg";
import Modal from "@/components/organisms/Modal/Modal";
import CloseIcon from "@/assets/svg/Close.svg";

export default function Contact() {
  const typeIcon25 = SizeTypeImg25();
  const typeIcon49 = SizeTypeImg49();
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

  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [contentFilter, setContentFilter] = useState<
    "All" | "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC"
  >("All");

  const handleOnClickSearchBtn = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };
  return (
    <>
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
            <Filter AllCount={43} setContentFilter={setContentFilter} />
          </styles.FilterBox>
          <styles.SearchBox onClick={handleOnClickSearchBtn}>
            <SearchIcon alt="search icon" />
          </styles.SearchBox>
          <styles.ButtonBox>
            <styles.RemoveBtn>삭제하기</styles.RemoveBtn>
            <styles.WhiteBtnBox style={{ marginLeft: "7px" }}>
              등록하기
            </styles.WhiteBtnBox>
          </styles.ButtonBox>
        </styles.MiddleBox>
        <styles.MainBox>
          <styles.StoreContainer>
            <styles.StoreTopBox>
              <styles.StoreIconBox>
                {typeIcon25["음식점"].value}
              </styles.StoreIconBox>
              <styles.StoreTypeBox>음식점</styles.StoreTypeBox>
              <styles.DashBoardIcon>
                <DashBoard alt="dash board icon" width={24} height={24} />
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
      {isSearchModalOpen && (
        <Modal>
          <styles.ModalContainer>
            <div style={{ display: "flex" }}>
              <styles.ModalCloseBox onClick={handleOnClickSearchBtn}>
                <CloseIcon alt="close icon" width={32} height={32} />
              </styles.ModalCloseBox>
            </div>
            <styles.ModalSearchBox>
              <styles.SearchInput placeholder="제휴하려는 가게를 찾아보세요!" />
              <styles.SearchIconBox>
                <SearchIcon alt="search icon" />
              </styles.SearchIconBox>
            </styles.ModalSearchBox>
            <styles.ModalFilterBox>
              <Filter AllCount={43} setContentFilter={setContentFilter} />
            </styles.ModalFilterBox>
            <styles.ModalListsBox>
              <styles.ModalStoreList>
                <styles.ModalStoreIconBox>
                  {typeIcon49["음식점"].value}
                </styles.ModalStoreIconBox>
                <styles.ModalStoreInfoBox>
                  <styles.ModalStoreTopBox>
                    <styles.ModalStoreName>릴즈</styles.ModalStoreName>
                    <styles.ModalStoreType>음식점</styles.ModalStoreType>
                  </styles.ModalStoreTopBox>
                  <styles.ModalStoreBottomBox>
                    서울특별시
                  </styles.ModalStoreBottomBox>
                </styles.ModalStoreInfoBox>
                <styles.ModalCheckBox>확인</styles.ModalCheckBox>
              </styles.ModalStoreList>
              <styles.ModalStoreList>
                <styles.ModalStoreIconBox>
                  {typeIcon49["음식점"].value}
                </styles.ModalStoreIconBox>
                <styles.ModalStoreInfoBox>
                  <styles.ModalStoreTopBox>
                    <styles.ModalStoreName>릴즈</styles.ModalStoreName>
                    <styles.ModalStoreType>음식점</styles.ModalStoreType>
                  </styles.ModalStoreTopBox>
                  <styles.ModalStoreBottomBox>
                    서울특별시
                  </styles.ModalStoreBottomBox>
                </styles.ModalStoreInfoBox>
                <styles.ModalCheckBox>확인</styles.ModalCheckBox>
              </styles.ModalStoreList>
              <styles.ModalStoreList>
                <styles.ModalStoreIconBox>
                  {typeIcon49["음식점"].value}
                </styles.ModalStoreIconBox>
                <styles.ModalStoreInfoBox>
                  <styles.ModalStoreTopBox>
                    <styles.ModalStoreName>릴즈</styles.ModalStoreName>
                    <styles.ModalStoreType>음식점</styles.ModalStoreType>
                  </styles.ModalStoreTopBox>
                  <styles.ModalStoreBottomBox>
                    서울특별시
                  </styles.ModalStoreBottomBox>
                </styles.ModalStoreInfoBox>
                <styles.ModalCheckBox>확인</styles.ModalCheckBox>
              </styles.ModalStoreList>
              <styles.ModalStoreList>
                <styles.ModalStoreIconBox>
                  {typeIcon49["카페"].value}
                </styles.ModalStoreIconBox>
                <styles.ModalStoreInfoBox>
                  <styles.ModalStoreTopBox>
                    <styles.ModalStoreName>릴즈</styles.ModalStoreName>
                    <styles.ModalStoreType>음식점</styles.ModalStoreType>
                  </styles.ModalStoreTopBox>
                  <styles.ModalStoreBottomBox>
                    서울특별시
                  </styles.ModalStoreBottomBox>
                </styles.ModalStoreInfoBox>
                <styles.ModalCheckBox>확인</styles.ModalCheckBox>
              </styles.ModalStoreList>
            </styles.ModalListsBox>
          </styles.ModalContainer>
        </Modal>
      )}
    </>
  );
}
