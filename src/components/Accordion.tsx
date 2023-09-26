import React, { useRef, useState, useCallback } from "react";
import { styled } from "styled-components";

// Type
type Props = {
  title?: string;
  contents?: any;
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

  // STATE
  const [isCollapse, setIsCollapse] = useState(false);

  // EVENT
  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef === null || childRef === null) {
        return;
      }

      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "lightgray";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );
  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? "열기" : "닫기";

  return (
    <Container>
      <Header onClick={handleButtonClick}>{props.title}</Header>
      <ContentWrapper ref={parentRef}>
        <Contents ref={childRef}>{props.contents}</Contents>
      </ContentWrapper>
      <Button>{buttonText}</Button>
    </Container>
  );
}
