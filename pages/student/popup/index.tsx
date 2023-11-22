import { useRouter } from "next/router";
import React from "react";
import * as styles from "@/components/styles/coupon/style";
import { css } from "@emotion/css";
import { usePopupData } from "@/components/hooks/usePopupData";
import EmptyComponent from "@/components/atoms/EmptyComponent";

const PopupAdminPage: React.FC = () => {
  const router = useRouter();

  const { popups } = usePopupData();

  return (
    <styles.Container>
      <styles.TitleBox>
        <styles.Title>팝업 관리</styles.Title>
        <styles.SubTitle>
          학생들에게 보여줄 팝업을 관리해보세요.
        </styles.SubTitle>
      </styles.TitleBox>
      <styles.ContentsBox>
        <styles.LabelBox>
          <styles.CountLabel>
            총 {popups ? popups.length : 0}개
          </styles.CountLabel>
          <styles.ContentsLabel>내용</styles.ContentsLabel>
          <styles.InfoLabel>정보제공</styles.InfoLabel>
        </styles.LabelBox>
        <styles.ListBox>
          {popups.length !== 0 ? (
            popups.map((element, index) => (
              <styles.ListElement key={index}>
                <styles.ListIndex>{index + 1}</styles.ListIndex>
                <styles.ListContent>{element.title}</styles.ListContent>
                <styles.ListStore>{element.period}</styles.ListStore>
              </styles.ListElement>
            ))
          ) : (
            <div
              className={css`
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <EmptyComponent />
            </div>
          )}
        </styles.ListBox>
      </styles.ContentsBox>
      <div
        className={css`
          display: flex;
          width: 97%;
          justify-content: flex-end;

          column-gap: 10px;
          margin-top: 20px;
        `}
      >
        <styles.CustomButton primary={true}>등록하기</styles.CustomButton>
        <styles.CustomButton primary={false}>삭제하기</styles.CustomButton>
      </div>
    </styles.Container>
  );
};

export default PopupAdminPage;
