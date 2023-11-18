import styled from "@emotion/styled";

interface HorizontalBox {
  column?: string;
}

export const PageTitle = styled.p`
  color: var(--, #1c1c1e);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 3rem);
  padding: 5% 10% 0% 10%;
`;

export const FlexBox = styled.div<HorizontalBox>`
  display: flex;
  flex-flow: ${(props) => (props?.column ? "column nowrap" : "row nowrap")};
`;
