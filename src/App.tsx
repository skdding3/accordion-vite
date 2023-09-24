import { useRef, useState, useCallback } from "react";
import { styled } from "styled-components";
import Accordion from "./components/Accordion";

// Content
const contents = (
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur
    reiciendis excepturi deserunt dolores, at quae? Odit veniam libero, incidunt
    in illo eius praesentium quia rerum eaque illum perspiciatis sint.
  </p>
);

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

  // EVENT
  const handleClick = useCallback((e) => {
    e.stopPropagation();
    if (parentRef.current === null || childRef.current === null) {
      return;
    }
  });

  // VIEW

  return <Accordion />;
}

export default App;
