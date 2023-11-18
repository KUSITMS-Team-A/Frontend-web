import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { useModal } from "../hooks/useModal";
import LoginModal from "./Modal";
import Logo from "@/components/atoms/Logo.svg";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { openModal } = useModal();

  return (
    <HeaderFrame>
      <LoginModal></LoginModal>
      <Logo
        onClick={() => {
          router.push("/");
        }}
        style={{
          position: "absolute",
          top: "30px",
        }}
      />
      <UserMenu>
        <ul>
          <UpperMenuItem
            onClick={() => {
              openModal();
            }}
          >
            로그인
          </UpperMenuItem>
          <UpperMenuItem>
            <Link href="/user">회원가입</Link>
          </UpperMenuItem>
          <UpperMenuItem>
            <Link href="/contact">마이페이지</Link>
          </UpperMenuItem>
        </ul>
      </UserMenu>
      <DefaultMenu>
        <ul>
          <LowerMenuItem>
            <Link href="/">대시보드</Link>
          </LowerMenuItem>
          <LowerMenuItem>
            <Link href="/">가게찾기</Link>
          </LowerMenuItem>
          <LowerMenuItem>
            <Link href="/apply">제휴가게</Link>
          </LowerMenuItem>
          <LowerMenuItem>
            <Link href="/">학생관리</Link>
            <SubDropdownMenu>
              <SubDropdownMenuItem>팝업관리</SubDropdownMenuItem>
              <SubDropdownMenuItem>쿠폰관리</SubDropdownMenuItem>
            </SubDropdownMenu>
          </LowerMenuItem>
        </ul>
      </DefaultMenu>
    </HeaderFrame>
  );
};

const HeaderFrame = styled.div`
  padding: 1rem 10rem 1rem 10rem;

  background-color: white;
  color: black;

  display: flex;
  flex-flow: column nowrap;
`;

const UserMenu = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  margin-bottom: 10px;

  ul {
    display: flex;
    gap: 20px;
  }
`;

const DefaultMenu = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;

  ul {
    display: flex;
    gap: 20px; // li 간의 간격

    font-size: 1.5rem;
  }
`;

const SubDropdownMenu = styled.div`
  position: absolute;
  bottom: -3rem;

  visibility: hidden;

  display: flex;
  flex-flow: column nowrap;
`;
const SubDropdownMenuItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  color: #000;

  font-size: 0.7rem;
  width: 100px;
  height: 1.5rem;
  &:hover {
    background-color: gray;
    color: white;
  }
`;

const LowerMenuItem = styled.li`
  position: relative;

  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.818px; /* 111.364% */
  letter-spacing: -0.96px;

  display: flex;
  flex-flow: column nowrap;
  padding: 5.091px 12.727px;
  justify-content: center;
  align-items: center;
  gap: 12.727px;

  transition: all 0.5s ease;

  &:hover div:nth-of-type(1) {
    visibility: visible;
    transition: all 0.5s ease;
  }
`;

const UpperMenuItem = styled.li`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 140% */
  letter-spacing: -0.6px;

  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    transition: all 0.5s ease;
  }
  &:not(:hover) {
    transition: all 0.5s ease;
  }
`;

export default Header;
