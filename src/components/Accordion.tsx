import React, { useRef, useState, useCallback } from "react";
import { styled } from "styled-components";

// Type
type Props = {
  title?: string;
  contents?: string;
};

// Style
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 0 32px 0 32px;
`;

const Button = styled.div`
  top: 8px;
  right: 8px;
  font-size: 14px;
  position: absolute;
`;

const ContentWrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: height 0.35s ease;
`;

const Contents = styled.div``;

export default function Accordion(props: Props) {
  // REF

  const parentRef = useRef(null);
  const childRef = useRef(null);

  return (
    <Container>
      <Header>{props.title}</Header>
      <ContentWrapper ref={parentRef}>
        <Contents ref={childRef}>{props.contents}</Contents>
      </ContentWrapper>
      <Button>열기</Button>
    </Container>
  );
}
