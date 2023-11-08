import KakaoMap from "@/components/Map";
import BeautyMarker from "@/components/Marker/Icon/Beauty";
import CafeMarker from "@/components/Marker/Icon/Cafe";
import CultureMarker from "@/components/Marker/Icon/Culture";
import EtcMarker from "@/components/Marker/Icon/Etc";
import FoodMarker from "@/components/Marker/Icon/Food";
import CultureNameMarker from "@/components/Marker/Name/Culture";
import FoodNameMarker from "@/components/Marker/Name/Food";
import Storelist from "@/components/Storelist";
import * as styles from "@/components/styles/Search.styles";

export default function SearchHome() {
  return (
    <styles.Container>
      <styles.TitleBox>가게 찾기</styles.TitleBox>
      <styles.MiddleBox>
        <styles.FiltersBox>
          <styles.FilterComponentBox>전체</styles.FilterComponentBox>
          <styles.FilterComponentBox>음식점</styles.FilterComponentBox>
          <styles.FilterComponentBox>카페</styles.FilterComponentBox>
          <styles.FilterComponentBox>미용</styles.FilterComponentBox>
          <styles.FilterComponentBox>문화</styles.FilterComponentBox>
          <styles.FilterComponentBox>기타</styles.FilterComponentBox>
        </styles.FiltersBox>
        {/** TODO: 누르면 expand로 변경되도록 */}
        <styles.SearchBox></styles.SearchBox>
        <styles.HeartBox>
          <styles.HeartIconBox></styles.HeartIconBox>
          <styles.HeartTextBox>픽한 업체</styles.HeartTextBox>
        </styles.HeartBox>
      </styles.MiddleBox>
      <styles.MainBox>
        <styles.MapBox>
          {/** 건국대학교 위치로 설정 (TODO: 추후에 변경 필요) */}
          <KakaoMap
            latitude={37.5407625}
            longitude={127.0740428}
            children={
              <>
                <FoodMarker lat={37.5407625} lng={127.0790428} />
                <CafeMarker lat={37.5380625} lng={127.0700328} />
                <BeautyMarker lat={37.5437625} lng={127.0740428} />
                <CultureMarker lat={37.5407625} lng={127.0720428} />
                <EtcMarker lat={37.5407625} lng={127.0670428} />
                <FoodNameMarker lat={37.5437625} lng={127.0670428} />
                <CultureNameMarker lat={37.5438625} lng={127.0640428} />
              </>
            }
          />
        </styles.MapBox>
        <styles.ListsBox>
          <styles.ListBox>
            <styles.TypeImgBox></styles.TypeImgBox>
            <styles.InfoContainerBox>
              <styles.InfoTopBox>
                <styles.NameBox>릴즈</styles.NameBox>
                <styles.StoreTypeBox>음식점</styles.StoreTypeBox>
                {/** TODO: warning 여부에 따라 보이도록
                 * <styles.WarningBox></styles.WarningBox>
                 */}
                <styles.StoreHeartBox></styles.StoreHeartBox>
              </styles.InfoTopBox>
              <styles.StoreInfoBox>아메리칸</styles.StoreInfoBox>
              <styles.StoreBottomBox>
                <styles.StoreLocationBox>서울특별시</styles.StoreLocationBox>
                <styles.StoreDistanceBox>176m</styles.StoreDistanceBox>
              </styles.StoreBottomBox>
              <styles.DownBtnBox></styles.DownBtnBox>
            </styles.InfoContainerBox>
          </styles.ListBox>
        </styles.ListsBox>
      </styles.MainBox>
    </styles.Container>
  );
}
