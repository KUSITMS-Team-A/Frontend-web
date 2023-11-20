export type StoreMapListInfo = {
  address: string;
  category: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC" | "NONE";
  description: string;
  distance: number;
  isPicked: boolean;
  storeId: number;
  storeName: string;
  latitude: number;
  longitude: number;
};

export type StoreDetailInfo = {};
