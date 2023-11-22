export type ContractListInfo = {
  category: "FOOD" | "CAFE" | "BEAUTY" | "CULTURE" | "ETC" | "NONE";
  storeId: number;
  storeName: string;
  benefits: Benefit[];
};

type Benefit = {
  amount: number;
  benfitId: number;
  content: string;
  type: "FIX" | "RATE" | "MENU";
};
