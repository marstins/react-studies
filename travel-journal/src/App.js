import travel from "./data.js"
import Card from "./components/Card.js";
import Navbar from "./components/Navbar.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        {travel.map(location => <Card location={location} />)}
      </section>
    </div>
  );
}

