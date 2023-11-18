import React from "react";
import styled from "@emotion/styled";
import { Button, Checkbox, TextField, keyframes } from "@mui/material";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalState";
import { useModal } from "../hooks/useModal";
import Logo from "@/components/atoms/Logo.svg";
import ModalCloseButton from "@/components/atoms/ModalCloseBtn.svg";

interface ModalProps {
  children?: React.ReactNode;
}

const LoginModal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const { closeModal } = useModal();

  if (!isOpen) return null;

  return (
    <Container>
      <LogoTitleWrapper>
        <Logo />
        <Title>로그인</Title>
      </LogoTitleWrapper>
      <LoginForm>
        <StyledTextField variant="filled" placeholder="아이디를 입력하세요" />
        <StyledTextField
          type="password"
          variant="filled"
          placeholder="비밀번호를 입력하세요"
        />
        <CheckboxWrapper>
          <Checkbox />
          <LoginSubTitle>로그인 유지</LoginSubTitle>
        </CheckboxWrapper>
        <LoginBtn variant="contained">로그인</LoginBtn>
        <RegistrationOptions>
          <LoginSubTitle>회원가입</LoginSubTitle>
          <LoginSubTitle>|</LoginSubTitle>
          <LoginSubTitle>비밀번호 찾기</LoginSubTitle>
        </RegistrationOptions>
      </LoginForm>
      <SocialLoginSection>
        <LoginSubTitle>간편 로그인</LoginSubTitle>
        <SocialLoginOptions>
          <LoginSubTitle>카카오톡으로 로그인</LoginSubTitle>
          <LoginSubTitle>네이버로 로그인</LoginSubTitle>
        </SocialLoginOptions>
      </SocialLoginSection>
      <StyledModalCloseButton onClick={closeModal} />
    </Container>
  );
};

export default LoginModal;

const bounceAnimation = keyframes`
  0% {
    transform: translate(-50%, -60%);
    opacity:0;
  }
  
  100% {
    transform: translate(-50%, -50%);
    opacity:1;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  z-index: 3000;
  transform: translate(-50%, -50%);
  width: 512.014px;
  height: 460px;
  flex-shrink: 0;
  padding: 30px 24px;
  display: flex;
  flex-flow: column nowrap;
  border-radius: 18px;
  background: white;
  box-shadow: 0px 10.08219px 25.20548px 0px rgba(0, 0, 0, 0.07);

  // animation
  animation: ${bounceAnimation} 0.5s ease;
`;

const LogoTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 5%;
`;

const Title = styled.p`
  color: var(--sb, #2d3036);
  text-align: center;
  font-size: 17.446px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -1.047px;
  padding-top: 10px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px 20px;
  margin-top: 30px;
  row-gap: 10px;
`;

const StyledTextField = styled(TextField)`
  &.MuiTextField-root {
    variant: filled;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LoginSubTitle = styled.p`
  color: var(--g2, #aeaeb2);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.84px;
`;

const LoginBtn = styled(Button)`
  border-radius: 6px;
  background: var(--sb, #2d3036);
`;

const RegistrationOptions = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLoginSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const SocialLoginOptions = styled.div`
  display: flex;
  column-gap: 20px;
`;

const StyledModalCloseButton = styled(ModalCloseButton)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
