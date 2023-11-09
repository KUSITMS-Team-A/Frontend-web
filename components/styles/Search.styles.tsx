import { COLORS } from "@/styles/colors";
import styled from "@emotion/styled";

export const Container = styled.div``;

export const TitleBox = styled.div``;

export const MiddleBox = styled.div`
  display: flex;
`;

export const FiltersBox = styled.div`
  display: flex;
`;

export const FilterComponentBox = styled.div``;
export const SearchBox = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  padding: 9px 8px;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
  background: #f7f7f7;
`;

export const SearchExpandBox = styled.div`
  width: 305px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 21px;
  background: #f7f7f7;
  padding: 9px 8px;
  display: flex;
`;

export const SearchInput = styled.input`
  font-size: 13.984px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.264px; /* 137.751% */
  letter-spacing: -0.839px;
  background-color: transparent;
  border: none;
  margin-left: 8px;
  width: 100%;
  outline: none;

  ::placeholder {
    color: #afafaf;
  }
`;

export const SearchIconBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const HeartBox = styled.div`
  display: flex;
`;

export const HeartIconBox = styled.div``;

export const HeartTextBox = styled.div``;

export const MainBox = styled.div`
  display: flex;
`;

export const MapBox = styled.div`
  width: 428px;
  height: 402px;
`;

export const ListsBox = styled.div`
  margin-left: 56px;
`;

export const ListBox = styled.div`
  display: flex;
  width: 448px;
  padding-bottom: 9px;
  border-bottom: 1px solid var(--g0, #f4f4f4);
`;

export const TypeImgBox = styled.div`
  margin-left: 24px;
`;

export const InfoContainerBox = styled.div`
  width: 313px;
  margin-left: 44px;
`;

export const InfoTopBox = styled.div`
  display: flex;
`;

export const NameBox = styled.div`
  color: var(--, #1c1c1e);
  font-family: Pretendard Variable;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 19.264px; /* 91.732% */
  letter-spacing: -1.26px;
  display: flex;
  align-items: center;
`;

export const StoreTypeBox = styled.div`
  color: var(--g2, #aeaeb2);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
  display: flex;
  align-items: center;
  margin-left: 7px;
  display: flex;
  align-items: center;
`;

export const WarningBox = styled.div``;

export const StoreHeartBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

export const StoreInfoBox = styled.div`
  margin-top: 11px;
  color: var(--g3, #636366);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
`;

export const StoreBottomBox = styled.div`
  display: flex;
  margin-top: 2px;
  width: 234px;
`;

export const StoreLocationBox = styled.div`
  color: var(--g2, #aeaeb2);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.264px; /* 160.532% */
  letter-spacing: -0.72px;
`;

export const StoreDistanceBox = styled.div`
  color: ${COLORS.distance_g};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.78px;
  margin-left: auto;
`;

export const DownBtnBox = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
