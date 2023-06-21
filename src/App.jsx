import Card from "./components/card/Card";
import Image from "./components/image/Image";
import CardTitle from "./components/card-title/CardTitle";
import CardBody from "./components/card-body/CardBody";

function App() {
  return (
    <section className="app">
      <Card />
      <Image />
      <CardTitle />
      <CardBody />
    </section>
  );
}

export default App
