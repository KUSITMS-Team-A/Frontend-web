import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;

interface Position {
  latitude: number;
  longitude: number;
}

const KakaoMap = ({ latitude, longitude }: Position) => {
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        center={{ lat: latitude, lng: longitude }}
        level={5}
        style={{ width: "100%", height: "100%" }}
      ></Map>
    </>
  );
};

export default KakaoMap;
