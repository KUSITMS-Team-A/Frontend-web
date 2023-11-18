import * as styles from "@/components/styles/apply-form/style";
import PrimaryZederoIcon from "@/components/atoms/ApplyFormIcon.svg";
import SubZederoIcon from "@/components/atoms/ApplyListIcon.svg";

export default function ApplyForm() {
  return (
    <styles.ContainerP>
      <styles.UpperBox>
        <styles.PageTitleP>제안서 작성</styles.PageTitleP>
        <styles.PageSubTitle>
          *사장님께 보이는 페이지입니다. 내용을 추가해주세요
        </styles.PageSubTitle>
      </styles.UpperBox>
      <styles.FormBox>
        <styles.FormTitleBox>
          <PrimaryZederoIcon />
          <styles.PageTitleP>제휴 제안서</styles.PageTitleP>
        </styles.FormTitleBox>
        <styles.InputBox>
          <styles.FormTitleBox>
            <SubZederoIcon />
            <styles.InputTitle>소개</styles.InputTitle>
          </styles.FormTitleBox>
        </styles.InputBox>
      </styles.FormBox>
    </styles.ContainerP>
  );
}
