import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConceptsWrapper from "./components/Wrappers/CoreConceptWrapper";
import TabButton from "./components/TabButton/TabButton";
import {  EXAMPLES } from "./data";

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
    setSelectedTopic(selectedTab);
    selectedTabValue = selectedTab;
  }

  console.log("tab content:", selectedTopic);

  return (
    <>
      <Header />
      <main>
        <CoreConceptsWrapper />
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
    </>
  );
}

export default App;
