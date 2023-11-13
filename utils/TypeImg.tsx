import Cafe from "@/assets/svg/Cafe.svg";
import Culture from "@/assets/svg/Culture.svg";
import Etc from "@/assets/svg/Etc.svg";
import Food from "@/assets/svg/Food.svg";
import Beauty from "@/assets/svg/Beauty.svg";
import Image from "next/image";

export const SizeTypeImg = (size: number) => {
  return {
    음식점: {
      value: <Image src={Food} alt="food marker" width={size} height={size} />,
    },
    카페: {
      value: <Image src={Cafe} alt="cafe marker" width={size} height={size} />,
    },
    미용: {
      value: (
        <Image src={Beauty} alt="Beauty marker" width={size} height={size} />
      ),
    },
    문화: {
      value: (
        <Image src={Culture} alt="Culture marker" width={size} height={size} />
      ),
    },
    기타: {
      value: <Image src={Etc} alt="Etc marker" width={size} height={size} />,
    },
  };
};
