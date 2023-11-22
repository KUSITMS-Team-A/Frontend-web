import React, { useMemo } from "react";
import * as styles from "./Inputs.style";
import { css } from "@emotion/css";
import { FilledInput, IconButton, InputAdornment } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";

const Inputs: React.FC = () => {
  const placeHolders = useMemo(
    () => [
      "제목을 입력해주세요",
      "내용을 입력해주세요",
      "2023.11.10오전 11:33:44",
      "바로가기 가게를 찾아보세요",
      "릴리",
    ],
    []
  );
  return (
    <styles.Container>
      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>1. 팝업정보</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper>
          <styles.TextInputs variant="outlined" placeholder={placeHolders[0]} />
          <styles.TextInputs
            variant="outlined"
            placeholder={placeHolders[1]}
            multiline
            rows={8}
          />
        </styles.InputWrapper>
      </styles.InputBox>

      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>2. 팝업기간</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper>
          <styles.CheckWrapper>
            <styles.BoxWithCheckBox>
              <styles.CheckBoxs />
              <styles.CheckBoxLabel>기간 지정</styles.CheckBoxLabel>
            </styles.BoxWithCheckBox>
            <div
              className={css`
                display: flex;
                column-gap: 10px;
                align-items: center;
              `}
            >
              <styles.PopupOptionButton>하루</styles.PopupOptionButton>
              <styles.PopupOptionButton>일주일간</styles.PopupOptionButton>
              <styles.PopupOptionButton>2주간</styles.PopupOptionButton>
            </div>
          </styles.CheckWrapper>
          <styles.CheckWrapper>
            <styles.BoxWithCheckBox>
              <styles.CheckBoxs />
              <styles.CheckBoxLabel>제한 없음</styles.CheckBoxLabel>
            </styles.BoxWithCheckBox>
          </styles.CheckWrapper>
        </styles.InputWrapper>
      </styles.InputBox>

      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>3. 발송시간</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper>
          <styles.CheckWrapper>
            <styles.BoxWithCheckBox>
              <styles.CheckBoxs />
              <styles.CheckBoxLabel>실시간</styles.CheckBoxLabel>
            </styles.BoxWithCheckBox>
          </styles.CheckWrapper>
          <styles.CheckWrapper>
            <styles.BoxWithCheckBox>
              <styles.CheckBoxs />
              <styles.CheckBoxLabel>예약</styles.CheckBoxLabel>
            </styles.BoxWithCheckBox>
            <FilledInput
              id="outlined-adornment-password"
              className={css`
                width: 100%;
              `}
              placeholder={placeHolders[2]}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <CalendarMonthTwoToneIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </styles.CheckWrapper>
        </styles.InputWrapper>
      </styles.InputBox>

      <styles.InputBox>
        <styles.TitleWrapper>
          <styles.Title>4. 가게 바로가기</styles.Title>
        </styles.TitleWrapper>
        <styles.InputWrapper
          className={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-self: center;
          `}
        >
          <FilledInput
            id="outlined-adornment-password"
            className={css`
              width: 50%;
            `}
            placeholder={placeHolders[3]}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchTwoToneIcon />
                </IconButton>
              </InputAdornment>
            }
          />
          <styles.TextInputs
            variant="filled"
            placeholder={placeHolders[4]}
            className={css`
              width: 49%;
            `}
          />
        </styles.InputWrapper>
      </styles.InputBox>
      <styles.SubmitButton variant="contained">등록</styles.SubmitButton>
    </styles.Container>
  );
};

export default Inputs;
