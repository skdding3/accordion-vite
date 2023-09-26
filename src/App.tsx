import Accordion from "./components/Accordion";

// Content
const LoremContents = (
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur
    reiciendis excepturi deserunt dolores, at quae? Odit veniam libero, incidunt
    in illo eius praesentium quia rerum eaque illum perspiciatis sint.
  </p>
);

function App() {
  // VIEW

  return (
    <div className="App">
      <h1>Sunki's Accordion</h1>
      <Accordion title="#1 accordion" contents={LoremContents} />
    </div>
  );
}

export default App;
