import * as styles from "@/components/styles/apply-list/style";
import Head from "next/head";
import MySvg from "@/components/atoms/ApplyListIcon.svg";
import { useRouter } from "next/router";

export default function ApplyList() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>제휴제안서 리스트</title>
        <meta name="apply" content="제안서리스트 관리" />
      </Head>
      <styles.ContainerP>
        <styles.PageTitlep>제안서 작성</styles.PageTitlep>
        <styles.SelectionGroup>
          <styles.SelectionItem>컨텍 전 제안서</styles.SelectionItem>
          <styles.SelectionItem>사장님이 검토 중인 제안서</styles.SelectionItem>
        </styles.SelectionGroup>
        <styles.SelectedList>
          {StoreInfo.map((element, index) => {
            return (
              <styles.StoreInfo key={index}>
                <div>
                  <MySvg />
                  <p>{element.category}</p>
                </div>
                <div>
                  <p>{element.title}</p>
                  <p>{element.description}</p>
                  <p>{element.address}</p>
                  <p>{element.distance}</p>
                </div>
              </styles.StoreInfo>
            );
          })}
        </styles.SelectedList>
        <styles.AddBtn
          onClick={() => {
            router.push("/apply/form");
          }}
        >
          추가하기
        </styles.AddBtn>
      </styles.ContainerP>
    </>
  );
}

const StoreInfo = [
  {
    title: "냠냠돈까스",
    description: "아메리칸 브런치, 잉글리쉬 브런치, 인도커리 브런치 등",
    address: "서울특별시 성동구 청계천로 474",
    distance: 176,
    category: "음식점",
  },
  {
    title: "냠냠돈까스",
    description: "아메리칸 브런치, 잉글리쉬 브런치, 인도커리 브런치 등",
    address: "서울특별시 성동구 청계천로 474",
    distance: 176,
    category: "음식점",
  },
  {
    title: "냠냠돈까스",
    description: "아메리칸 브런치, 잉글리쉬 브런치, 인도커리 브런치 등",
    address: "서울특별시 성동구 청계천로 474",
    distance: 176,
    category: "음식점",
  },
  {
    title: "냠냠돈까스",
    description: "아메리칸 브런치, 잉글리쉬 브런치, 인도커리 브런치 등",
    address: "서울특별시 성동구 청계천로 474",
    distance: 176,
    category: "음식점",
  },
  {
    title: "냠냠돈까스",
    description: "아메리칸 브런치, 잉글리쉬 브런치, 인도커리 브런치 등",
    address: "서울특별시 성동구 청계천로 474",
    distance: 176,
    category: "음식점",
  },
  {
    title: "냠냠돈까스",
    description: "아메리칸 브런치, 잉글리쉬 브런치, 인도커리 브런치 등",
    address: "서울특별시 성동구 청계천로 474",
    distance: 176,
    category: "음식점",
  },
];
