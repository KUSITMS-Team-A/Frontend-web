import { useState } from "react";

enum PopupPeriod {
  none,
  aDay,
  aWeek,
  twoWeek,
  aMonth,
}

interface Popup {
  title: string;
  contents: string;
  period: PopupPeriod;
  timing: Date | boolean;
  store: string;
}

export const usePopupData = () => {
  const [popups, setPopups] = useState<Popup[]>(exData);

  // api 호출해서 초기화

  return { popups };
};

// 예시 데이터

const exData: Popup[] = [
  {
    title: "오늘만 배부른 최뚝배기 가게 5% 추가할인!",
    contents: "내용",
    period: PopupPeriod.twoWeek,
    timing: true,
    store: "최뚝배기",
  },
  {
    title: "오늘만 배부른 최뚝배기 가게 5% 추가할인!",
    contents: "내용",
    period: PopupPeriod.twoWeek,
    timing: true,
    store: "최뚝배기",
  },
];
