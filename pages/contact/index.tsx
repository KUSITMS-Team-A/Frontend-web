import SearchInput from "@/components/SearchInput";
import Filter from "@/components/organisms/Filter";
import * as styles from "@/components/styles/Contact.styles";
import SearchIcon from "@/assets/svg/Search.svg";
import { SizeTypeImg49, SizeTypeImgSmall } from "@/utils/TypeImg";
import { useEffect, useState } from "react";
import DashBoard from "@/assets/svg/SmallDashBoardIcon.svg";
import Modal from "@/components/organisms/Modal/Modal";
import CloseIcon from "@/assets/svg/Close.svg";
import { getContractBase } from "../api/ContractAPI";
import { ContractListInfo } from "@/@types/Contract";
import { typeIcon } from "@/components/Marker/Icon/IconMarker";
import { useRouter } from "next/router";
import { FilterProps } from "../api/StoreAPI";

export default function Contact() {
  const [data, setData] = useState<ContractListInfo[]>();
  const [operateFilter, setOperateFilter] = useState<FilterProps>({
    isPicked: false,
    name: "",
    category: "NONE",
    pageNumber: 0,
  });
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [contentFilter, setContentFilter] = useState<
    "NONE" | "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC"
  >("NONE");

  const typeIcon49 = SizeTypeImg49();

  const eng = ["FOOD", "CAFE", "CULTURE", "BEAUTY", "ETC"];

  const typeEngtoKor = (name: string) => {
    const kor = ["음식점", "카페", "문화", "미용", "기타"];
    return kor[eng.indexOf(name)];
  };

  useEffect(() => {
    const baseData = getContractBase({
      isPicked: false,
      name: "",
      category: "NONE",
      pageNumber: 0,
    });
    baseData.then((res) => {
      setData(res?.contractedStores);
      console.log(res?.contractedStores);
    });
  }, []);

  // 가게 타입 필터를 누를때마다 실행되는 함수
  useEffect(() => {
    setOperateFilter((prevFilter) => ({
      ...prevFilter,
      category: contentFilter,
    }));
  }, [contentFilter]);

  // 필터가 바뀔때마다 실행되는 함수
  useEffect(() => {
    const filterData = getContractBase({
      isPicked: operateFilter.isPicked,
      name: operateFilter.name,
      category: operateFilter.category,
      pageNumber: operateFilter.pageNumber,
    });
    filterData.then((res) => {
      if (res !== null) {
        setData(res.contractedStores);
        console.log("operateF", res.contractedStores);
      }
    });
  }, [operateFilter]);

  const handleOnClickSearchBtn = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const router = useRouter();

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
            <Filter setContentFilter={setContentFilter} />
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
          {data?.map((el) => {
            return (
              <styles.StoreContainer
                key={el.storeId}
                onClick={() => {
                  router.push(`/contact/store/${el.storeId}`);
                }}
              >
                <styles.StoreTopBox>
                  <styles.StoreIconBox>
                    {typeIcon[typeEngtoKor(el.category)]?.value || null}
                  </styles.StoreIconBox>
                  <styles.StoreTypeBox>
                    {typeEngtoKor(el.category)}
                  </styles.StoreTypeBox>
                  <styles.DashBoardIcon>
                    <DashBoard alt="dash board icon" width={24} height={24} />
                  </styles.DashBoardIcon>
                </styles.StoreTopBox>
                <styles.StoreNameBox>{el.storeName}</styles.StoreNameBox>
                <styles.BenefitBox>
                  <styles.ConditionBox>
                    {el.benefits[0].content}
                  </styles.ConditionBox>
                  <styles.PercentBox>
                    {el.benefits[0].type === "RATE"
                      ? el.benefits[0].amount + "% 할인"
                      : el.benefits[0].type === "FIX"
                      ? el.benefits[0].amount + "원 할인"
                      : el.benefits[0].content}
                  </styles.PercentBox>
                </styles.BenefitBox>
              </styles.StoreContainer>
            );
          })}
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
