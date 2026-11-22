import Header from "./components/Header/Header";
import CoreConceptsWrapper from "./components/Wrappers/CoreConceptWrapper";
import ExamplesWrapper from "./components/Wrappers/ExamplesWrapper";

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConceptsWrapper />
        <ExamplesWrapper />
      </main>
    </>
  );
}

export default App;
