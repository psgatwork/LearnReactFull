import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  let selectedTabValue = "Nothing";

  let tabContentJSX = <p>Select a tab to see the example.</p>;
  if (selectedTopic) {
    tabContentJSX = (
      <div>
        <h3>{EXAMPLES[selectedTopic]?.title || "Select a tab"}</h3>
        <p>{EXAMPLES[selectedTopic]?.description || ""}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic]?.code || ""}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedTab) {
    console.log(`Button clicked before: ${selectedTab}`);
    setSelectedTopic(selectedTab);
    selectedTabValue = selectedTab;
    console.log(`Button clicked after: ${selectedTab}`);
  }

  console.log("tab content:", selectedTopic);

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.forEach((concept) => {
              return (<CoreConcepts key={concept.title} {...concept} />);
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("Components")}
              isSelected={selectedTopic === "Components"}
            >
              Components
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("JSX")}
              isSelected={selectedTopic === "JSX"}
            >
              JSX
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("Props")}
              isSelected={selectedTopic === "Props"}
            >
              Props
            </TabButton>
            <TabButton
              onSelect={() => handleSelect("State")}
              isSelected={selectedTopic === "State"}
            >
              State
            </TabButton>
          </menu>
          <section id="core-concepts">
            <div>{tabContentJSX}</div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
