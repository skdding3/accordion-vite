import { useRef, useState } from "react";
import { styled } from "styled-components";

// TYPE

type Props = {
  title?: string;
  contents?: string;
};

// STYLE
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

function App(props: Props) {
  // Ref

  const parentRef = useRef(null);
  const childRef = useRef(null);

  // STATE
  const [isCollaps, setIsCollaps] = useState(false);

  // VIEW

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

export default App;
