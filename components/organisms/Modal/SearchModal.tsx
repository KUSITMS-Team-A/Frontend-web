import Modal from "@/components/organisms/Modal/Modal";
import * as styles from "@/components/styles/SearchModal.styles";
import CloseIcon from "@/assets/svg/Close.svg";
import SearchIcon from "@/assets/svg/Search.svg";
import Filter from "@/components/organisms/Filter";
import { SizeTypeImg49 } from "@/utils/TypeImg";
import { useState } from "react";

interface SMProps {
  setIsSearchOpen: Function;
}

const SearchModal = ({ setIsSearchOpen }: SMProps) => {
  const [contentFilter, setContentFilter] = useState<
    "NONE" | "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC"
  >("NONE");

  const typeIcon49 = SizeTypeImg49();

  const handleOnClickCloseBtn = () => {
    setIsSearchOpen(false);
  };

  return (
    <Modal>
      <styles.ModalContainer>
        <div style={{ display: "flex" }}>
          <styles.ModalCloseBox onClick={handleOnClickCloseBtn}>
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
  );
};

export default SearchModal;
