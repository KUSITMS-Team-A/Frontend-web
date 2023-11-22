import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Food from "@/assets/svg/Food.svg";
import Beauty from "@/assets/svg/Beauty.svg";

import LCafe from "@/assets/svg/Big/Cafe.svg";
import LCulture from "@/assets/svg/Big/Culture.svg";
import LEtc from "@/assets/svg/Big/Etc.svg";
import LFood from "@/assets/svg/Big/Food.svg";
import LBeauty from "@/assets/svg/Big/Beauty.svg";

export const SizeTypeImg25 = () => {
  return {
    음식점: {
      value: <Food alt="food marker" />,
    },
    카페: {
      value: <Cafe alt="cafe marker" />,
    },
    미용: {
      value: <Beauty alt="Beauty marker" />,
    },
    문화: {
      value: <Culture alt="Culture marker" />,
    },
    기타: {
      value: <Etc alt="Etc marker" />,
    },
  };
};

export const SizeTypeImg68 = () => {
  return {
    음식점: {
      value: <LFood alt="food marker" />,
    },
    카페: {
      value: <LCafe alt="cafe marker" />,
    },
    미용: {
      value: <LBeauty alt="Beauty marker" />,
    },
    문화: {
      value: <LCulture alt="Culture marker" />,
    },
    기타: {
      value: <LEtc alt="Etc marker" />,
    },
  };
};
