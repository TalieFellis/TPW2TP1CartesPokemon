import Card from "./components/card/Card";

const cardData = [
  {
    id: 1,
    image: "src/assets/pokemonPikachu.png",
    name: "Pikachu",
    abilities: ["Statique", "Paratonnerre"]
  },
  {
    id: 2,
    image: "src/assets/pokemonCharizard.png",
    name: "Charizard",
    abilities: ["Brasier", "Force solaire"]
  },
  {
    id: 3,
    image: "src/assets/pokemonArbok.png",
    name: "Arbok",
    abilities: ["Intimider", "Insomnie"]
  },
  {
    id: 4,
    image: "src/assets/pokemonBulbasaur.png",
    name: "Bulbasaur",
    abilities: ["Chlorophylle", "Engrais"]
  },
  {
    id: 5,
    image: "src/assets/pokemonHorsea.png",
    name: "Horsea",
    abilities: ["Sniper", "Humide"]
  },
  {
    id: 6,
    image: "src/assets/pokemonJigglypuff.png",
    name: "Jigglypuff",
    abilities: ["Mignon", "Compétitif"]
  },
  {
    id: 7,
    image: "src/assets/pokemonKakuna.png",
    name: "Kakuna",
    abilities: ["Endurance", "Toile"]
  },
  {
    id: 8,
    image: "src/assets/pokemonMetapod.png",
    name: "Metapod",
    abilities: ["Armure", "Statique"]
  },
  {
    id: 9,
    image: "src/assets/pokemonPidgeotto.png",
    name: "Pidgeotto",
    abilities: ["Regard vif", "Téméraire"]
  },
  {
    id: 10,
    image: "src/assets/pokemonSquirtle.png",
    name: "Squirtle",
    abilities: ["Plante", "Poison"]
  },
  {
    id: 11,
    image: "src/assets/pokemonVaporeon.png",
    name: "Vaporeon",
    abilities: ["Torrent", "Glissade"]
  },
  {
    id: 12,
    image: "src/assets/pokemonVileplume.png",
    name: "Vileplume",
    abilities: ["Chlorophylle", "Pose Spore"]
  },
];


function App() {
  return (
    <section className="app">
      {cardData.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </section>
  );
}

export default App
