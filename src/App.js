import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Roadmap from "./Components/Roadmap";
import Team from "./Components/Team";
import Partners from "./Components/Partners";
import Supply from "./Components/Supply";
import Tokenomics from "./Components/Tokenomics";
import Header from "./Components/Header";
import Stretch from "./Components/Stretch";
import Strategies from "./Components/Strategies";
import Coresider from "./Components/Coresider";

function App() {
  return (
    <div  className="overflow-hidden">
      <Header />
      <Stretch />
      <Coresider />
      <Tokenomics />
      <Supply />
      <Strategies />
      <Team />
      <Partners />
      <Roadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
