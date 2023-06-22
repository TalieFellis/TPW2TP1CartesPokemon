import Card from "./components/card/Card";
import Image from "./components/image/Image";
import CardTitle from "./components/card-title/CardTitle";
import { Container } from "react-bootstrap";
import AccordionsWithUseEffect from "./components/accordions-with-useeffect/AccordionsWithUseEffect";

function App() {
  return (
    <section className="app">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default App
