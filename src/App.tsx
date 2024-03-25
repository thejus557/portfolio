import "./App.css";
import Card from "./shared/components/Card/Card";
import LinkParticle from "./shared/components/Particles";

function App() {
  return (
    <>
      <LinkParticle />
      <Card className="w-96 h-96 relative">
        <p>surya</p>
      </Card>
    </>
  );
}

export default App;
