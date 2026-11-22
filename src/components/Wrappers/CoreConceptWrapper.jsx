import CoreConcepts from "../CoreConcepts/CoreConcepts";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConceptWrapper() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcepts key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
