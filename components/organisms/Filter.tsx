import * as styles from "@/components/styles/Search.styles";
import uCafe from "@/assets/svg/unselect/uCafe.svg";
import uCulture from "@/assets/svg/unselect/uCulture.svg";
import uEtc from "@/assets/svg/unselect/uEtc.svg";
import uFood from "@/assets/svg/unselect/uFood.svg";
import uBeauty from "@/assets/svg/unselect/uBeauty.svg";
import Image from "next/image";
import { SizeTypeImg } from "@/utils/TypeImg";
import { ReactNode, useState } from "react";

interface FProps {
  AllCount?: number;
}

const Filter = ({ AllCount = -1 }: FProps) => {
  const [isAll, setIsAll] = useState(true);
  const [filterState, setFilterState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleOnClickAll = () => {
    setIsAll(!isAll);
    setFilterState([false, false, false, false, false]);
  };

  const handleOnClickFilter = (idx: number) => {
    setIsAll(false);
    setFilterState((prevState) =>
      prevState.map((value, index) => (index === idx ? true : false))
    );
  };

  const filterName: ("음식점" | "카페" | "미용" | "문화" | "기타")[] = [
    "음식점",
    "카페",
    "미용",
    "문화",
    "기타",
  ];

  const typeStyles: { [key: string]: { value: ReactNode } } = {
    음식점: {
      value: <Image src={uFood} alt="food marker" width={30} height={30} />,
    },
    카페: {
      value: <Image src={uCafe} alt="cafe marker" width={30} height={30} />,
    },
    미용: {
      value: <Image src={uBeauty} alt="Beauty marker" width={30} height={30} />,
    },
    문화: {
      value: (
        <Image src={uCulture} alt="Culture marker" width={30} height={30} />
      ),
    },
    기타: {
      value: <Image src={uEtc} alt="Etc marker" width={30} height={30} />,
    },
  };

  return (
    <styles.FiltersBox>
      <styles.FilterAllText type={isAll} onClick={handleOnClickAll}>
        전체{AllCount === -1 ? "" : `(${AllCount})`}
      </styles.FilterAllText>
      {filterName.map((el, idx) => {
        return (
          <styles.FilterComponentBox
            key={el}
            onClick={() => handleOnClickFilter(idx)}
          >
            <styles.FilterIconBox>
              {filterState[idx]
                ? SizeTypeImg(30)[el].value
                : typeStyles[el].value}
            </styles.FilterIconBox>
            <styles.FilterText type={filterState[idx]}>{el}</styles.FilterText>
          </styles.FilterComponentBox>
        );
      })}
    </styles.FiltersBox>
  );
};

export default Filter;
