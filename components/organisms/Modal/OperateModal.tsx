import { useState } from "react";
import Modal from "./Modal";
import styled from "@emotion/styled";
import CloseIcon from "@/assets/svg/Close.svg";
import Button from "../Button";
import { COLORS } from "@/styles/colors";
import { Checkbox } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";

interface props {
  setIsOperate: Function;
}

const OperateModal = ({ setIsOperate }: props) => {
  return <Modal></Modal>;
};

const Container = styled.div``;

const CloseBox = styled.div``;

const TopBox = styled.div``;

const TitleBox = styled.div``;

const SubTitleBox = styled.div``;

const DataDescriptionBox = styled.div``;

const RankBox = styled.div``;

const RankTitleBox = styled.div``;

const RankNumberBox = styled.div``;

const RankTxtBox = styled.div``;

const RankContainer = styled.div``;

const RankLeftBox = styled.div``;

const NameBox = styled.div``;

const GrayBox = styled.div``;

const RankRightBox = styled.div``;

const WhiteBox = styled.div``;

const BlueBox = styled.div``;

export default OperateModal;
